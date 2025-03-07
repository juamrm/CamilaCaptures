import { useState, useEffect } from "react";
import {
  getCloudinaryUrl,
  getCloudinaryUrlWithCustomTransformations,
} from "../utils/cloudinary";

export function CloudinaryTest() {
  const [testImageUrl, setTestImageUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [workingFormat, setWorkingFormat] = useState<string>("");
  const [debugInfo, setDebugInfo] = useState<Record<string, any>>({});
  const [testResults, setTestResults] = useState<
    Array<{ url: string; success: boolean; error?: string }>
  >([]);

  useEffect(() => {
    const testImageId = "fotosbebes/IMG_7792";
    const results: Array<{ url: string; success: boolean; error?: string }> =
      [];

    // Collect debug information
    const debug = {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "not set",
      imageId: testImageId,
      environment: {
        NODE_ENV: import.meta.env.MODE,
        DEV: import.meta.env.DEV,
        PROD: import.meta.env.PROD,
      },
    };
    setDebugInfo(debug);

    // Test different transformation scenarios
    const testScenarios = [
      {
        name: "Basic URL",
        url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/${testImageId}`,
        description: "Basic URL without transformations",
      },
      {
        name: "Simple Transformations",
        url: getCloudinaryUrl(testImageId),
        description: "Basic transformation with auto format and quality",
      },
      {
        name: "Custom Transformations",
        url: getCloudinaryUrlWithCustomTransformations(
          testImageId,
          "w_800,h_600,c_fill,q_auto"
        ),
        description: "Custom transformations with specific width and height",
      },
    ];

    // Test each scenario
    const testPromises = testScenarios.map(async (scenario) => {
      try {
        console.log(`Testing ${scenario.name}:`, scenario.url);
        const response = await fetch(scenario.url, { method: "HEAD" });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        results.push({
          url: scenario.url,
          success: true,
        });

        // If this is the first successful test, use it as the main image
        if (!testImageUrl) {
          setTestImageUrl(scenario.url);
          setWorkingFormat(scenario.description);
        }

        return true;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        results.push({
          url: scenario.url,
          success: false,
          error: errorMessage,
        });
        console.error(`Error testing ${scenario.name}:`, errorMessage);
        return false;
      }
    });

    // Run all tests
    Promise.all(testPromises)
      .then((successes) => {
        setTestResults(results);
        setIsLoading(false);

        // If no tests succeeded, show error
        if (!successes.some((s) => s)) {
          setError(
            "All Cloudinary tests failed. Check the debug information below."
          );
        }
      })
      .catch((err) => {
        setError(`Test execution failed: ${err.message}`);
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
          <h3 className="font-bold">Debug Information:</h3>
          <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Test Results:</h3>
          <div className="mt-2 space-y-2">
            {testResults.map((result, index) => (
              <div
                key={index}
                className={`p-2 rounded ${result.success ? "bg-green-50" : "bg-red-50"}`}
              >
                <div className="font-semibold">
                  {result.success ? "✓" : "✗"} Test {index + 1}
                </div>
                <div className="text-sm break-all">{result.url}</div>
                {result.error && (
                  <div className="text-sm text-red-600">{result.error}</div>
                )}
              </div>
            ))}
          </div>
        </div>
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
            <li>
              Check the Network tab in your browser's developer tools for the
              exact request
            </li>
            <li>Verify that your Cloudinary account has enough credits</li>
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
          <strong>Test Results:</strong>
          <div className="mt-2 space-y-2">
            {testResults.map((result, index) => (
              <div
                key={index}
                className={`p-2 rounded ${result.success ? "bg-green-50" : "bg-red-50"}`}
              >
                <div className="font-semibold">
                  {result.success ? "✓" : "✗"} Test {index + 1}
                </div>
                <div className="text-sm break-all">{result.url}</div>
                {result.error && (
                  <div className="text-sm text-red-600">{result.error}</div>
                )}
              </div>
            ))}
          </div>
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
