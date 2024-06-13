import React, { useState } from "react";
import { CloudUpload, Loader } from "lucide-react";

function UploadVideo({ onUpload }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false); // Track upload status
  const [videoPreview, setVideoPreview] = useState(""); // Track video preview URL
  const [uploadSuccess, setUploadSuccess] = useState(false); // Track upload success

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // Create URL for video preview
    const videoURL = URL.createObjectURL(selectedFile);
    setVideoPreview(videoURL);
  };

  const handleUpload = () => {
    if (!file) return;

    setUploading(true); // Start uploading

    const formData = new FormData();
    formData.append("video", file);

    fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        onUpload(data.result);
        setUploadSuccess(true); // Set upload success flag
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setUploading(false); // Stop uploading
      });
  };

  return (
    <div className="p-4 bg-white shadow-md upload-video rounded-xl">
      {!uploading && !videoPreview && (
        <div className="flex flex-col items-center">
          <CloudUpload size={60} className="mb-4 text-gray-500" />
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="video/*"
            id="video-input"
          />
          <label
            htmlFor="video-input"
            className="px-4 py-2 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
          >
            Choose Video
          </label>
        </div>
      )}

      {/* Show video preview when file selected */}
      {videoPreview && !uploading && (
        <div className="mt-4">
          <video className="w-full h-auto max-h-40" controls>
            <source src={videoPreview} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!uploadSuccess && (
            <button
              onClick={handleUpload}
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Upload Video
            </button>
          )}
        </div>
      )}

      {/* Show loader when uploading */}
      {uploading && (
        <div className="flex flex-col items-center mt-4">
          <Loader size={32} className="text-blue-600 animate-spin" />
          <p className="mt-2 text-gray-600">Uploading video...</p>
        </div>
      )}

      {/* Show upload success message */}
      {uploadSuccess && (
        <div className="px-4 py-2 mt-4 text-green-600 bg-green-100 rounded-md">
          Video uploaded successfully!
        </div>
      )}
    </div>
  );
}

export default UploadVideo;
