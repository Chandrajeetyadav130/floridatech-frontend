import React, { useState } from "react";
import { useApplication } from "../../context/ApplicationContext";

export default function UploadDocumentsStep() {
  const { formData, updateFormData, setStep } = useApplication();
  const [photo, setPhoto] = useState(formData.photo || null);
  const [document, setDocument] = useState(formData.document || null);

  const handleNext = () => {
    updateFormData("photo", photo);
    updateFormData("document", document);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Upload Documents</h2>
      <div className="mb-4">
        <label>Photo:</label>
        <input type="file" onChange={(e) => setPhoto(e.target.files[0])} className="block mt-1" />
      </div>
      <div className="mb-4">
        <label>Document:</label>
        <input type="file" onChange={(e) => setDocument(e.target.files[0])} className="block mt-1" />
      </div>
      <button className="bg-red-600 text-white px-6 py-2 rounded" onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
}
