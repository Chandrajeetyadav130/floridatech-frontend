import React, { useState, useEffect } from "react";
import { useApplication } from "../../context/ApplicationContext";

export default function SignatureStep() {
  const { formData, updateFormData, setStep } = useApplication();
  const [signature, setSignature] = useState(formData.signature || "");
  const [isFilled, setIsFilled] = useState(false);
  // Check if the signature field is filled
  useEffect(() => {
    setIsFilled(signature.trim() !== "");
  }, [signature]);
  const handleNext = () => {
    updateFormData("signature", signature);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="signature-container">
      <h2 className="signature-title">Signature</h2>

      <input
        type="text"
        placeholder="Type your full name as signature"
        value={signature}
        onChange={(e) => setSignature(e.target.value)}
        className="form-input"
      />
      <button
        disabled={!isFilled}
        className={`save-btn ${isFilled ? "filled" : ""}`}
        onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
}
