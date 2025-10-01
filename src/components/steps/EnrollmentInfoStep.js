import React, { useState, useEffect } from "react";
import { useApplication } from "../../context/ApplicationContext";

export default function EnrollmentInfoStep() {
  const { formData, updateFormData, setStep } = useApplication();
  const [enrollmentDate, setEnrollmentDate] = useState(formData.enrollmentInfo?.enrollmentDate || "");
  const [enrollmentType, setEnrollmentType] = useState(formData.enrollmentInfo?.enrollmentType || "");
  const [isFilled, setIsFilled] = useState(false);
  // Check if both fields are filled
  useEffect(() => {
    setIsFilled(enrollmentDate !== "" && enrollmentType !== "");
  }, [enrollmentDate, enrollmentType]);
  const handleNext = () => {
    updateFormData("enrollmentInfo", { enrollmentDate, enrollmentType });
    setStep((prev) => prev + 1);
  };

  return (
    <div className="enrollment-container">
      <h2 className="enrollment-title">Enrollment Information</h2>
      <div className="form-group">
        <label >Enrollment Date</label>
        <input
          type="date"
          value={enrollmentDate}
          onChange={(e) => setEnrollmentDate(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="form-group">
        <label >Enrollment Type</label>
        <select
          value={enrollmentType}
          onChange={(e) => setEnrollmentType(e.target.value)}
          className="form-input"
        >
          <option value="">Select</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
        </select>
      </div>
      <button onClick={handleNext} disabled={!isFilled}
        className={`save-btn ${isFilled ? "filled" : ""}`}>
        Save & Continue
      </button>
    </div>
  );
}
