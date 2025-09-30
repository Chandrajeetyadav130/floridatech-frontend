import React, { useState } from "react";
import { useApplication } from "../../context/ApplicationContext";

export default function EmergencyContactStep() {
  const { formData, updateFormData, setStep } = useApplication();
  const [contact, setContact] = useState(formData.emergencyContact || {});

  const handleChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

  const handleNext = () => {
    updateFormData("emergencyContact", contact);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Emergency Contact</h2>
      <input name="name" placeholder="Name" value={contact.name || ""} onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <input name="relation" placeholder="Relation" value={contact.relation || ""} onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <input name="phone" placeholder="Phone" value={contact.phone || ""} onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <input name="email" placeholder="Email" value={contact.email || ""} onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <button className="bg-red-600 text-white px-6 py-2 rounded" onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
}
