import React, { useState } from "react";
import UploadVideo from "./components/UploadVideo";
import AnalysisResult from "./components/AnalysisResult";

function App() {
  const [result, setResult] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 app">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        Deepfake Video Classifier
      </h1>
      <div className="w-full max-w-md">
        <UploadVideo onUpload={setResult} />
        <AnalysisResult result={result} />
      </div>
      <div className="mt-4 text-sm text-gray-600">
        * This model is currently under development so results may seem
        inaccurate.
      </div>
    </div>
  );
}

export default App;
