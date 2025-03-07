import { useState, useEffect } from "react";

export function CloudinaryTest() {
  const [testImageUrl, setTestImageUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [workingFormat, setWorkingFormat] = useState<string>("");

  useEffect(() => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    if (!cloudName) {
      setError("Cloudinary cloud name is not configured");
      setIsLoading(false);
      return;
    }

    const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
    const testImageId = "fotosbebes/IMG_7792";
    const imageUrl = `${baseUrl}/v1/f_auto,q_auto,w_800,c_fill,g_auto/${testImageId}`;

    console.log("Testing Cloudinary connection with URL:", imageUrl);

    // Test if the image exists
    fetch(imageUrl, { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load image: ${response.status}`);
        }
        setTestImageUrl(imageUrl);
        setWorkingFormat(`Using optimized format with transformations`);
        console.log(`Success with URL: ${imageUrl}`);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading image:", err);
        setError(
          "Failed to load test image. Please check the console for details."
        );
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Testing Cloudinary connection...</div>;
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-800 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Cloudinary Error</h2>
        <div>{error}</div>
        <div className="mt-4">
          <strong>Cloud Name:</strong>{" "}
          {import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}
        </div>
        <div className="mt-2">
          <p>Please check:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Your Cloudinary cloud name is correct</li>
            <li>The image "IMG_7792" exists in the "fotosbebes" folder</li>
            <li>The image is publicly accessible</li>
            <li>Your .env file has the correct values</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Cloudinary Test</h2>
      <div className="space-y-4">
        <div>
          <strong>Cloud Name:</strong>{" "}
          {import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}
        </div>
        <div>
          <strong>Working Format:</strong>{" "}
          <span className="text-green-600">{workingFormat}</span>
        </div>
        <div>
          <strong>Working Image URL:</strong>{" "}
          <a
            href={testImageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline break-all"
          >
            {testImageUrl}
          </a>
        </div>
        <div>
          <strong>Test Image:</strong>
          <img
            src={testImageUrl}
            alt="Test image"
            className="mt-2 max-w-xs rounded"
            onError={(e) => {
              console.error("Failed to load test image:", e);
              setError(
                "Failed to load test image after URL seemed to work. Check console for details."
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}
