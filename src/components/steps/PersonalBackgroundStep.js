import React, { useState, useEffect } from "react";
import { useApplication } from "../../context/ApplicationContext";

export default function PersonalBackgroundStep() {
  const { formData, updateFormData, setStep } = useApplication();
  const [data, setData] = useState(formData.personalBackground || {});
  const [isFilled, setIsFilled] = useState(false);
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  // Check if all fields are filled
  useEffect(() => {
    const requiredFields = ["firstName", "lastName", "dob", "gender", "nationality"];
    const filled = requiredFields.every((field) => data[field] && data[field] !== "");
    setIsFilled(filled);
  }, [data]);
  const handleNext = () => {
    updateFormData("personalBackground", data);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="personal-container">
      <h2 className="personal-title">Personal Background</h2>
      <input name="firstName" placeholder="First Name" value={data.firstName || ""} onChange={handleChange} className="form-input" />
      <input name="lastName" placeholder="Last Name" value={data.lastName || ""} onChange={handleChange} className="form-input" />
      <input type="date" name="dob" value={data.dob || ""} onChange={handleChange} className="form-input" />
      <select name="gender" value={data.gender || ""} onChange={handleChange} className="form-input">
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <input name="nationality" placeholder="Nationality" value={data.nationality || ""} onChange={handleChange} className="form-input" />
      <button
        disabled={!isFilled}
        className={`save-btn ${isFilled ? "filled" : ""}`}
        onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
}
