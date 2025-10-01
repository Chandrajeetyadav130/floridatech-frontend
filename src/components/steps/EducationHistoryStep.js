import React, { useState, useEffect } from "react";
import { useApplication } from "../../context/ApplicationContext";

export default function EducationHistoryStep() {
  const { formData, updateFormData, setStep } = useApplication();
  const [education, setEducation] = useState(formData.educationHistory || []);
  const [isFilled, setIsFilled] = useState(false);
  const addEducation = () => setEducation([...education, { school: "", degree: "", year: "", grade: "" }]);

  const handleChange = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };
  // Check if at least one education entry is filled
  useEffect(() => {
    const filled = education.some((edu) =>
      edu.school || edu.degree || edu.year || edu.grade
    );
    setIsFilled(filled);
  }, [education]);
  const handleNext = () => {
    updateFormData("educationHistory", education);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="education-container">
      <h2 className="education-title">Education History</h2>
      {education.map((edu, i) => (
        <div key={i} className="education-entry">
          <input placeholder="School" value={edu.school} onChange={(e) => handleChange(i, "school", e.target.value)} className="form-input" />
          <input placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(i, "degree", e.target.value)} className="form-input" />
          <input type="number" placeholder="Year" value={edu.year} onChange={(e) => handleChange(i, "year", e.target.value)} className="form-input" />
          <input placeholder="Grade" value={edu.grade} onChange={(e) => handleChange(i, "grade", e.target.value)} className="form-input" />
        </div>
      ))}
      <button onClick={addEducation} className="add-btn" >+ Add More</button>
      <button
        disabled={!isFilled}
        className={`save-btn ${isFilled ? "filled" : ""}`}
        onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
}
