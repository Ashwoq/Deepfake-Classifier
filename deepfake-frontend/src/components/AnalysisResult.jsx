import React from "react";

function AnalysisResult({ result }) {
  const handleUploadNewVideo = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className="p-4 mt-8 text-center text-black bg-white shadow-md analysis-result rounded-xl">
      <h2 className="mb-4 text-xl font-bold">Analysis Result</h2>
      {result ? (
        <>
          <p
            className={`text-lg py-2 border rounded border-red-300 font-semibold ${
              result === "FAKE"
                ? "bg-red-100 text-red-600 "
                : "bg-green-100 text-green-600 "
            }`}
          >
            The uploaded video is {result}
          </p>
          <button
            onClick={handleUploadNewVideo}
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Upload New Video
          </button>
        </>
      ) : (
        <p className="text-lg font-semibold">
          Upload a video to see the result!
        </p>
      )}
    </div>
  );
}

export default AnalysisResult;
