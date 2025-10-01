import React, { useState,useEffect } from "react";
import { useApplication } from "../../context/ApplicationContext";

export default function ProgramStep() {
  const { formData, updateFormData, setStep } = useApplication();

  const degreeOptions = [
    "Master of science in Computer Science (MSCS)",
    "Master of business adminstration (MBA)",
    "Bachelor of Science in Computer science",
    "Bachelor of science in Business Administration",
    "Doctorate in Computer Science",
    "Doctorate in Business Administraiton",
  ];
  const [program, setProgram] = useState(formData.program || "");
  const [isFilled, setIsFilled] = useState(false);
  // Check if user selected a degree
  useEffect(() => {
    setIsFilled(program !== "");
  }, [program]);

  const handleNext = () => {
    updateFormData("program", program);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="program-container">
      <h2 className="program-title">Program of Study</h2>
      <div className="form-group">
        <select
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="form-input"
        >
          <option value="" disabled>Select a degree</option>
          {degreeOptions.map((degree, index) => (
            <option key={index} value={degree}>
              {degree}
            </option>
          ))}
        </select>
      </div>

      <button
        disabled={!isFilled}
        className={`save-btn ${isFilled ? "filled" : ""}`}
        onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
}
