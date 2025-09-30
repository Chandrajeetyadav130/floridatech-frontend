import React, { useState } from "react";
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

  const handleNext = () => {
    updateFormData("program", program);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Program of Study</h2>
  
            <select
        value={program}
        onChange={(e) => setProgram(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="" disabled>Select a degree</option>
        {degreeOptions.map((degree, index) => (
          <option key={index} value={degree}>
            {degree}
          </option>
        ))}
      </select>
      <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded" onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
}
