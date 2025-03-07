import { useEffect, useState } from "react";

export function TestConfig() {
  const [config, setConfig] = useState<{
    cloudName: string | undefined;
    baseUrl: string | undefined;
    env: any;
    sampleImageUrl: string | undefined;
  }>({
    cloudName: undefined,
    baseUrl: undefined,
    env: undefined,
    sampleImageUrl: undefined,
  });

  useEffect(() => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
    const sampleImageUrl = `${baseUrl}/f_auto,q_85,w_800,c_fill,g_auto/fotosbebes/IMG_7792`;

    setConfig({
      cloudName,
      baseUrl,
      env: import.meta.env,
      sampleImageUrl,
    });
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Configuration Test</h2>
      <div className="space-y-2">
        <div>
          <strong>Cloudinary Cloud Name:</strong>{" "}
          <span
            className={config.cloudName ? "text-green-600" : "text-red-600"}
          >
            {config.cloudName || "Not found"}
          </span>
        </div>
        <div>
          <strong>Base URL:</strong>{" "}
          <span className={config.baseUrl ? "text-green-600" : "text-red-600"}>
            {config.baseUrl || "Not found"}
          </span>
        </div>
        <div>
          <strong>Sample Image URL:</strong>{" "}
          <span
            className={
              config.sampleImageUrl ? "text-green-600" : "text-red-600"
            }
          >
            {config.sampleImageUrl || "Not found"}
          </span>
        </div>
        <div>
          <strong>Environment:</strong>
          <pre className="mt-2 p-2 bg-gray-200 rounded text-sm overflow-auto">
            {JSON.stringify(config.env, null, 2)}
          </pre>
        </div>
        {config.sampleImageUrl && (
          <div className="mt-4">
            <strong>Sample Image Test:</strong>
            <img
              src={config.sampleImageUrl}
              alt="Test image"
              className="mt-2 max-w-xs rounded"
              onError={(e) => {
                console.error("Failed to load test image:", e);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
