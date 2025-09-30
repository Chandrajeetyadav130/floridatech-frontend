import React from "react";
import axios from "axios";
import { useApplication } from "../../context/ApplicationContext";

export default function ReviewStep() {
  const { formData } = useApplication();

  const handleSubmit = async () => {
    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] instanceof File) {
        form.append(key, formData[key]);
      } else {
        form.append(key, JSON.stringify(formData[key]));
      }
    });

    try {
      const res = await axios.post("http://localhost:5000/api/applications", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Application submitted successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Error submitting application");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Review Your Application</h2>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(formData, null, 2)}</pre>
      <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded" onClick={handleSubmit}>
        Submit Application
      </button>
    </div>
  );
}
