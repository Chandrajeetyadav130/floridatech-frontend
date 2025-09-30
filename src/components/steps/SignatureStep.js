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
    <div className="">
      <h2 className="">Signature</h2>
      <input
        type="text"
        placeholder="Type your full name as signature"
        value={signature}
        onChange={(e) => setSignature(e.target.value)}
        className=""
      />
      <button className="" onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
}
