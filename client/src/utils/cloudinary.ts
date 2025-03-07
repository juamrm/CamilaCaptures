import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { blur } from "@cloudinary/url-gen/actions/effect";

export interface CloudinaryConfig {
  cloudName: string;
}

export const cloudinaryConfig: CloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
};

// Add cloud name validation
function isValidCloudName(cloudName: string | undefined): boolean {
  return typeof cloudName === "string" && cloudName.trim().length > 0;
}

// Initialize Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: isValidCloudName(cloudinaryConfig.cloudName)
      ? cloudinaryConfig.cloudName
      : "",
    apiKey: "557724628995268",
    apiSecret: "FtUNXoQgvWapTq1vxYOhE9CETj0"
  },
  url: {
    secure: true, // force https
  },
});

// Add initialization status check
const isCloudinaryInitialized = isValidCloudName(cloudinaryConfig.cloudName);
if (!isCloudinaryInitialized) {
  console.error(
    "Cloudinary is not properly initialized. Please check your VITE_CLOUDINARY_CLOUD_NAME environment variable."
  );
}

export class CloudinaryError extends Error {
  constructor(
    message: string,
    public readonly imageId?: string
  ) {
    super(message);
    this.name = "CloudinaryError";
  }
}

// Add a debounced error logger to prevent console flooding
const errorCache = new Set<string>();
const MAX_ERRORS = 10;

function logImageError(imageId: string, error?: string) {
  const errorKey = `${imageId}-${error || "generic"}`;
  if (errorCache.size < MAX_ERRORS && !errorCache.has(errorKey)) {
    errorCache.add(errorKey);
    console.warn(
      `Cloudinary image error (showing first ${MAX_ERRORS} unique errors):`,
      { imageId, error }
    );

    if (errorCache.size === MAX_ERRORS) {
      console.warn("Additional Cloudinary errors will be suppressed");
    }
  }
}

export function getCloudinaryImage(imageId: string) {
  if (!cloudinaryConfig.cloudName) {
    throw new CloudinaryError("Cloudinary cloud name is not configured");
  }

  if (!imageId) {
    throw new CloudinaryError("Image ID is required");
  }

  try {
    // Clean the image ID by removing any file extension and normalizing slashes
    const cleanId = imageId
      .replace(/\.[^/.]+$/, "") // Remove file extension if present
      .replace(/^\/+/, "") // Remove leading slashes
      .replace(/\/+/g, "/"); // Normalize multiple slashes to single
    return cld.image(cleanId);
  } catch (error) {
    throw new CloudinaryError(
      `Failed to generate Cloudinary image: ${error instanceof Error ? error.message : "Unknown error"}`,
      imageId
    );
  }
}

export function getCloudinaryUrl(
  imageId: string,
  size: "default" | "thumbnail" | "fullSize" | "placeholder" = "default"
): string {
  if (!isCloudinaryInitialized) {
    logImageError("config", "Cloudinary is not properly initialized");
    return "";
  }

  if (!imageId?.trim()) {
    logImageError("validation", "Image ID is empty or invalid");
    return "";
  }

  try {
    // Clean the image ID by removing any file extension and normalizing slashes
    const cleanId = imageId
      .trim()
      .replace(/\.[^/.]+$/, "") // Remove file extension if present
      .replace(/^\/+/, "") // Remove leading slashes
      .replace(/\/+/g, "/"); // Normalize multiple slashes to single

    if (!cleanId) {
      logImageError("validation", "Image ID is invalid after cleaning");
      return "";
    }

    const img = cld.image(cleanId);

    switch (size) {
      case "thumbnail":
        img.resize(scale().width(400)).quality(auto());
        break;
      case "fullSize":
        img.resize(scale().width(1200)).quality(auto());
        break;
      case "placeholder":
        img
          .resize(scale().width(50))
          .quality(auto())
          .effect(blur().strength(1000));
        break;
      default:
        img.resize(scale().width(800)).quality(auto());
    }

    const url = img.toURL();
    if (!url) {
      logImageError(imageId, "Generated URL is empty");
      return "";
    }
    return url;
  } catch (error) {
    logImageError(
      imageId,
      error instanceof Error ? error.message : "Unknown error"
    );
    return "";
  }
}

export function getImagePlaceholder(imageId: string): string {
  return getCloudinaryUrl(imageId, "placeholder");
}

export function preloadImage(imageId: string): Promise<void> {
  return new Promise((resolve) => {
    if (!imageId || typeof imageId !== "string") {
      resolve();
      return;
    }

    const url = getCloudinaryUrl(imageId);
    if (!url) {
      resolve();
      return;
    }

    const img = new Image();
    img.src = url;
    img.onload = () => resolve();
    img.onerror = () => {
      logImageError(imageId, "Failed to load image");
      resolve();
    };
  });
}

export async function preloadImages(imageIds: string[]): Promise<void> {
  if (!Array.isArray(imageIds)) {
    console.warn("preloadImages called with invalid argument:", imageIds);
    return;
  }

  // Reset error cache for new batch
  errorCache.clear();

  // Filter out invalid imageIds and deduplicate
  const validImageIds = [
    ...new Set(imageIds.filter((id) => id && typeof id === "string")),
  ];

  // Batch process images
  const batchSize = 5; // Reduced batch size for better handling

  for (let i = 0; i < validImageIds.length; i += batchSize) {
    const batch = validImageIds.slice(i, i + batchSize);

    try {
      await Promise.all(batch.map(preloadImage));
      // Add longer delay between batches
      if (i + batchSize < validImageIds.length) {
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
    } catch (error) {
      logImageError("batch", "Batch processing failed");
    }
  }
}
