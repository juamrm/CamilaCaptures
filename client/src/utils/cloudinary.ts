export interface CloudinaryConfig {
  cloudName: string;
  transformations?: {
    default: string;
    thumbnail: string;
    fullSize: string;
    placeholder: string;
  };
}

const DEFAULT_TRANSFORMATIONS = {
  default: "f_auto,q_85,w_800,c_scale",
  thumbnail: "f_auto,q_70,w_400,c_scale",
  fullSize: "f_auto,q_90,w_1200,c_scale",
  placeholder: "f_auto,q_10,w_50,e_blur:1000,c_scale",
};

export const cloudinaryConfig: CloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  transformations: DEFAULT_TRANSFORMATIONS,
};

function cleanImageId(publicId: string): string {
  return publicId
    .replace(/^\/+/, "")
    .replace(/\/+/g, "/")
    .replace(/\.[^/.]+$/, "")
    .replace(/^fotosbebes\/fotosbebes\//, "fotosbebes/");
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

export function getCloudinaryUrl(
  imageId: string,
  transformation: keyof typeof DEFAULT_TRANSFORMATIONS = "default"
): string {
  if (!cloudinaryConfig.cloudName) {
    throw new CloudinaryError("Cloudinary cloud name is not configured");
  }

  if (!imageId) {
    throw new CloudinaryError("Image ID is required");
  }

  try {
    const baseUrl = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload`;
    const transformationType =
      cloudinaryConfig.transformations?.[transformation] ||
      DEFAULT_TRANSFORMATIONS.default;
    const cleanId = cleanImageId(imageId);

    return `${baseUrl}/${transformationType}/${cleanId}`;
  } catch (error) {
    throw new CloudinaryError(
      `Failed to generate Cloudinary URL: ${error instanceof Error ? error.message : "Unknown error"}`,
      imageId
    );
  }
}

export function getImagePlaceholder(imageId: string): string {
  return getCloudinaryUrl(imageId, "placeholder");
}

export function preloadImage(imageId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = getCloudinaryUrl(imageId);
    img.onload = () => resolve();
    img.onerror = () =>
      reject(new CloudinaryError("Failed to preload image", imageId));
  });
}

export async function preloadImages(imageIds: string[]): Promise<void[]> {
  const results = await Promise.allSettled(imageIds.map(preloadImage));

  const errors = results
    .filter(
      (result): result is PromiseRejectedResult => result.status === "rejected"
    )
    .map((result) => result.reason);

  if (errors.length > 0) {
    console.warn("Some images failed to preload:", errors);
  }

  return results
    .filter(
      (result): result is PromiseFulfilledResult<void> =>
        result.status === "fulfilled"
    )
    .map((result) => result.value);
}
