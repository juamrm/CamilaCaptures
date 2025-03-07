import { useState, useEffect } from "react";

interface ImageStatus {
  publicId: string;
  status: "loading" | "success" | "error";
  error?: string;
}

function sanitizePublicId(publicId: string): string {
  // Remove the duplicate 'fotosbebes/' prefix if it exists
  let cleanId = publicId.replace(/^fotosbebes\/fotosbebes\//, "fotosbebes/");

  // Replace spaces and commas with underscores
  cleanId = cleanId.replace(/[\s,]+/g, "_");

  // Remove any trailing spaces
  cleanId = cleanId.trim();

  return cleanId;
}

export function ImageVerification() {
  const [imageStatuses, setImageStatuses] = useState<ImageStatus[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const publicIds = [
    "fotosbebes/2024_14_24_47_20250305_134228_0000",
    "fotosbebes/2024_12_53_51_20250305_134703_0000",
    "fotosbebes/2024_12_38_09_20250305_130054_0000",
    "fotosbebes/2024_12_18_01_20250305_134723_0000",
    "fotosbebes/2024_10_22_53_20250305_125149_0000",
    "fotosbebes/_MG_7479_20250305_125949_0000",
    "fotosbebes/IMG_9901",
    "fotosbebes/IMG_8688",
    "fotosbebes/IMG_8463",
    "fotosbebes/IMG_7792",
    "fotosbebes/IMG_4429_20250305_125437_0000",
    "fotosbebes/IMG_3904",
    "fotosbebes/2024_20_54_26_20250305_125940_0000",
    "fotosbebes/2024_20_49_19_20250305_130010_0000",
    "fotosbebes/2024_20_49_19_20250305_130010_0000_2",
    "fotosbebes/2024_18_38_29_20250305_125832_0000",
    "fotosbebes/2024_18_38_29_20250305_125832_0000_2",
    "fotosbebes/2024_18_28_19_20250305_134254_0000",
    "fotosbebes/2024_14_49_31_20250305_134348_0000",
    "fotosbebes/2024_14_26_46_20250305_134217_0000",
    "fotosbebes/2024_14_24_47_20250305_134228_0000",
    "fotosbebes/2024_12_53_51_20250305_134703_0000",
    "fotosbebes/2024_12_38_09_20250305_130054_0000",
    "fotosbebes/2024_12_18_01_20250305_134723_0000",
    "fotosbebes/2024_10_22_53_20250305_125149_0000",
  ];

  useEffect(() => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    if (!cloudName) {
      setImageStatuses(
        publicIds.map((id) => ({
          publicId: id,
          status: "error",
          error: "Cloudinary cloud name not configured",
        }))
      );
      setIsLoading(false);
      return;
    }

    const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;

    // Initialize statuses
    setImageStatuses(
      publicIds.map((id) => ({
        publicId: id,
        status: "loading",
      }))
    );

    // Check each image
    publicIds.forEach((publicId, index) => {
      const sanitizedId = sanitizePublicId(publicId);
      const imageUrl = `${baseUrl}/v1/f_auto,q_auto,w_800,c_fill,g_auto/${sanitizedId}`;

      fetch(imageUrl, { method: "HEAD" })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          setImageStatuses((prev) => {
            const newStatuses = [...prev];
            newStatuses[index] = {
              publicId: sanitizedId,
              status: "success",
            };
            return newStatuses;
          });
        })
        .catch((error) => {
          setImageStatuses((prev) => {
            const newStatuses = [...prev];
            newStatuses[index] = {
              publicId: sanitizedId,
              status: "error",
              error: error.message,
            };
            return newStatuses;
          });
        });
    });

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Verifying images...</div>;
  }

  const successCount = imageStatuses.filter(
    (s) => s.status === "success"
  ).length;
  const errorCount = imageStatuses.filter((s) => s.status === "error").length;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Image Verification Results</h2>
      <div className="mb-4">
        <p>Total Images: {imageStatuses.length}</p>
        <p className="text-green-600">Successfully Loaded: {successCount}</p>
        <p className="text-red-600">Failed to Load: {errorCount}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageStatuses.map((status, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${
              status.status === "success"
                ? "bg-green-50 border-green-200"
                : "bg-red-50 border-red-200"
            }`}
          >
            <div className="font-mono text-sm break-all">{status.publicId}</div>
            <div
              className={`mt-2 ${
                status.status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.status === "success"
                ? "✓ Loaded"
                : `✗ Error: ${status.error}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
