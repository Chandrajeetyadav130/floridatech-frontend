import React, { useState, useEffect } from "react";
import { useApplication } from "../../context/ApplicationContext";

export default function EmergencyContactStep() {
  const { formData, updateFormData, setStep } = useApplication();
  const [contact, setContact] = useState(formData.emergencyContact || {});
  const [isFilled, setIsFilled] = useState(false);
  const handleChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });
  // Check if all fields are filled
  useEffect(() => {
    const requiredFields = ["name", "relation", "phone", "email"];
    const filled = requiredFields.every((field) => contact[field] && contact[field] !== "");
    setIsFilled(filled);
  }, [contact]);
  const handleNext = () => {
    updateFormData("emergencyContact", contact);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="emergency-container">
      <h2 className="emergency-title">Emergency Contact</h2>
      <input name="name" placeholder="Name" value={contact.name || ""} onChange={handleChange} className="form-input" />
      <input name="relation" placeholder="Relation" value={contact.relation || ""} onChange={handleChange} className="form-input" />
      <input name="phone" placeholder="Phone" value={contact.phone || ""} onChange={handleChange} className="form-input" />
      <input name="email" placeholder="Email" value={contact.email || ""} onChange={handleChange} className="form-input" />
      <button
        disabled={!isFilled}
        className={`save-btn ${isFilled ? "filled" : ""}`}
        onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
}
