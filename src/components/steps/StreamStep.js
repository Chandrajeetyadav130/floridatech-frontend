// steps/StreamStep.js
import React, { useState } from "react";
import { useApplication } from "../../context/ApplicationContext";

export default function StreamStep() {
  const { formData, updateFormData, setStep } = useApplication();
  const [selected, setSelected] = useState(formData.stream);

  const handleNext = () => {
    if (!selected) {
      alert("Please select an application type before continuing.");
      return;
    }
    updateFormData("stream", selected);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="ApplicationTypeMainContainer">
      <h2 className="">Application Type</h2>
      <div className="card_app">
        {["Graduate/Master's Application", "Undergraduate/Bachelor Application", "DoctoratePhd Application"].map((option) => (
          <div
          className="innerCard-app"
            key={option}
            style={{
              border: "1px solid", // base border
              borderColor: selected === option ? "#EF4444" : "#D1D5DB", // red-500 or gray-300
              borderRadius: "0.375rem", // rounded-lg
              padding: "1.5rem", // p-6
              cursor: "pointer",
              transition: "border-color 0.2s ease"
            }}
            onClick={() => setSelected(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <button
        style={{
          marginTop: "1.5rem",
          padding: "0.5rem 1.5rem",
          borderRadius: "0.375rem",
          color: "white",
          backgroundColor: selected ? "#DC2626" : "#9CA3AF", // red-600 or gray-400
          cursor: selected ? "pointer" : "not-allowed",
          border: "none",
          fontWeight: "bold",
          width:"100%"
        }}

        onClick={handleNext}
        disabled={!selected}
      >
        Save & Continue
      </button>
    </div>
  );
}
