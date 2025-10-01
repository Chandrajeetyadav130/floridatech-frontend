import React, { useState, useEffect } from "react";
import { useApplication } from "../../context/ApplicationContext";

export default function UploadDocumentsStep() {
  const { formData, updateFormData, setStep } = useApplication();
  const [photo, setPhoto] = useState(formData.photo || null);
  const [document, setDocument] = useState(formData.document || null);
  const [isFilled, setIsFilled] = useState(false);
  // Check if both files are selected
  useEffect(() => {
    setIsFilled(photo !== null && document !== null);
  }, [photo, document]);
  const handleNext = () => {
    updateFormData("photo", photo);
    updateFormData("document", document);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload Documents</h2>
      <div className="form-group">
        <label>Photo:</label>
        <input type="file" onChange={(e) => setPhoto(e.target.files[0])} className="form-input" />
      </div>
      <div className="form-group">
        <label>Document:</label>
        <input type="file" onChange={(e) => setDocument(e.target.files[0])} className="form-input" />
      </div>
      <button disabled={!isFilled}
        className={`save-btn ${isFilled ? "filled" : ""}`} onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
}
