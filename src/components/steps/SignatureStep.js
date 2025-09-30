import React, { useState } from "react";
import { useApplication } from "../../context/ApplicationContext";

export default function SignatureStep() {
  const { formData, updateFormData, setStep } = useApplication();
  const [signature, setSignature] = useState(formData.signature || "");

  const handleNext = () => {
    updateFormData("signature", signature);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Signature</h2>
      <input
        type="text"
        placeholder="Type your full name as signature"
        value={signature}
        onChange={(e) => setSignature(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button className="bg-red-600 text-white px-6 py-2 rounded" onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
}
