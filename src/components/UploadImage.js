import React, { useState } from "react";
import "./UploadImage.css";

function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // Step 1: When user selects a file
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Step 2: When user clicks the Upload button
  const handleUpload = () => {
    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      setPreview(imageURL);
    } else {
      alert("Please choose an image first!");
    }
  };

  return (
    <div className="page upload">
      <h2>📸 Upload Your Children’s Day Picture!</h2>
      <p>Choose your favorite photo and click Upload to preview it 🎉</p>

      <div className="upload-box">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input"
        />
        <button onClick={handleUpload} className="upload-btn">
          Upload
        </button>
      </div>

      {preview && (
        <div className="preview">
          <h3>Preview:</h3>
          <img src={preview} alt="Uploaded preview" className="uploaded-img" />
        </div>
      )}
    </div>
  );
}

export default UploadImage;
