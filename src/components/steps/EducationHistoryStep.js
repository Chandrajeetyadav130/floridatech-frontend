import React, { useState } from "react";
import { useApplication } from "../../context/ApplicationContext";

export default function EducationHistoryStep() {
  const { formData, updateFormData, setStep } = useApplication();
  const [education, setEducation] = useState(formData.educationHistory || []);

  const addEducation = () => setEducation([...education, { school: "", degree: "", year: "", grade: "" }]);

  const handleChange = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const handleNext = () => {
    updateFormData("educationHistory", education);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Education History</h2>
      {education.map((edu, i) => (
        <div key={i} className="border p-4 mb-2 rounded">
          <input placeholder="School" value={edu.school} onChange={(e) => handleChange(i, "school", e.target.value)} className="border p-2 rounded w-full mb-2" />
          <input placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(i, "degree", e.target.value)} className="border p-2 rounded w-full mb-2" />
          <input type="number" placeholder="Year" value={edu.year} onChange={(e) => handleChange(i, "year", e.target.value)} className="border p-2 rounded w-full mb-2" />
          <input placeholder="Grade" value={edu.grade} onChange={(e) => handleChange(i, "grade", e.target.value)} className="border p-2 rounded w-full" />
        </div>
      ))}
      <button onClick={addEducation} className="bg-gray-300 px-4 py-2 rounded mr-2">+ Add More</button>
      <button className="bg-red-600 text-white px-6 py-2 rounded" onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
}
