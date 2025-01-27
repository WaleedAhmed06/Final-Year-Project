import React, { useState } from "react";

const UploadTestIDs = () => {
  const [program, setProgram] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const programs = [
    "Computer Science",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Business Administration",
    "Law",
    "Medicine",
    "Architecture",
    "Psychology",
    "Nursing",
    "Data Science",
    "Biotechnology",
  ];

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploading(true);
    files.forEach((file, index) => {
      setTimeout(() => {
        setProgress(((index + 1) / files.length) * 100);
        setUploadedFiles((prev) => [...prev, file]);
        if (index === files.length - 1) {
          setUploading(false);
        }
      }, 500 * (index + 1));
    });
  };

  const handleProgramSelect = (event) => {
    setProgram(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-[80%] bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-semibold text-center mb-4">
          Upload Test IDs
        </h1>

        <select
          value={program}
          onChange={handleProgramSelect}
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
        >
            <option value="">-- Select Program --</option>
          {programs.map((item , index) => (
            <option key={index} value="Program A">{item}</option>
          ))}
          </select>

        <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center mb-4">
          <input
            type="file"
            accept=".csv,.xlsx"
            multiple
            className="hidden"
            id="file-upload"
            onChange={handleFileUpload}
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="text-gray-600">
              Drag & drop files or{" "}
              <span className="text-blue-500 underline">Browse</span>
            </div>
            <div className="text-sm text-gray-400 mt-2">
              Supported formats: CSV, Excel
            </div>
          </label>
        </div>

        {uploading && (
          <div className="mb-4">
            <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Uploading - {Math.round(progress)}%
            </div>
          </div>
        )}

        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Uploaded</h3>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-sm text-gray-600 mb-2"
              >
                <span>{file.name}</span>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() =>
                    setUploadedFiles((prev) =>
                      prev.filter((_, i) => i !== index)
                    )
                  }
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="w-full bg-green-600 text-white py-2 rounded-lg"
          onClick={() => alert("Files uploaded successfully!")}
        >
          Upload Files
        </button>
      </div>
    </div>
  );
};

export default UploadTestIDs;
