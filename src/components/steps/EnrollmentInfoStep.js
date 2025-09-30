import React, { useState } from "react";
import { useApplication } from "../../context/ApplicationContext";

export default function EnrollmentInfoStep() {
  const { formData, updateFormData, setStep } = useApplication();
  const [enrollmentDate, setEnrollmentDate] = useState(formData.enrollmentInfo?.enrollmentDate || "");
  const [enrollmentType, setEnrollmentType] = useState(formData.enrollmentInfo?.enrollmentType || "");

  const handleNext = () => {
    updateFormData("enrollmentInfo", { enrollmentDate, enrollmentType });
    setStep((prev) => prev + 1);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Enrollment Information</h2>
      <div className="mb-4">
        <label className="block">Enrollment Date</label>
        <input
          type="date"
          value={enrollmentDate}
          onChange={(e) => setEnrollmentDate(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="">
        <label className="">Enrollment Type</label>
        <select
          value={enrollmentType}
          onChange={(e) => setEnrollmentType(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
        </select>
      </div>
      <button className="" onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
}
