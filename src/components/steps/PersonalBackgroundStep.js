import React, { useState } from "react";
import { useApplication } from "../../context/ApplicationContext";

export default function PersonalBackgroundStep() {
  const { formData, updateFormData, setStep } = useApplication();
  const [data, setData] = useState(formData.personalBackground || {});

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleNext = () => {
    updateFormData("personalBackground", data);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Personal Background</h2>
      <input name="firstName" placeholder="First Name" value={data.firstName || ""} onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <input name="lastName" placeholder="Last Name" value={data.lastName || ""} onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <input type="date" name="dob" value={data.dob || ""} onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <select name="gender" value={data.gender || ""} onChange={handleChange} className="border p-2 rounded w-full mb-2">
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <input name="nationality" placeholder="Nationality" value={data.nationality || ""} onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <button className="bg-red-600 text-white px-6 py-2 rounded" onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
}
