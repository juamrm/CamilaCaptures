export function getCloudinaryUrl(imageId: string) {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    throw new Error("Cloudinary cloud name is not configured");
  }

  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  // More reliable transformations that work with most image types
  const transformations = "f_auto,q_85,w_800,c_scale";

  // Clean and prepare the image ID
  const cleanImageId = imageId
    .replace(/^\/+/, "") // Remove leading slashes
    .replace(/\/+/g, "/") // Replace multiple slashes with single slash
    .replace(/[^a-zA-Z0-9\/_-]/g, ""); // Remove any invalid characters

  // Don't encode the entire path, just encode special characters
  const encodedImageId = cleanImageId
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");

  const url = `${baseUrl}/${transformations}/${encodedImageId}`;
  console.log("Generated Cloudinary URL:", url); // Debug log
  return url;
}

export function getCloudinaryUrlWithCustomTransformations(
  imageId: string,
  transformations: string
) {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    throw new Error("Cloudinary cloud name is not configured");
  }

  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;

  // Clean and prepare the image ID
  const cleanImageId = imageId
    .replace(/^\/+/, "") // Remove leading slashes
    .replace(/\/+/g, "/") // Replace multiple slashes with single slash
    .replace(/[^a-zA-Z0-9\/_-]/g, ""); // Remove any invalid characters

  // Don't encode the entire path, just encode special characters
  const encodedImageId = cleanImageId
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");

  const url = `${baseUrl}/${transformations}/${encodedImageId}`;
  console.log("Generated Cloudinary URL:", url); // Debug log
  return url;
}

export function validateCloudinaryConfig() {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    return {
      isValid: false,
      error: "Cloudinary cloud name is not configured",
    };
  }
  return { isValid: true };
}
