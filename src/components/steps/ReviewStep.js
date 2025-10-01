import React from "react";
import { useState } from "react";
import axios from "axios";
import { useApplication } from "../../context/ApplicationContext";

export default function ReviewStep() {
  const renderUrl = "https://floridatech.onrender.com"
  const [isSubmitting, setIsSubmitting] = useState(false); // loading state
  // const API_URL="process.env.REACT_APP_API_URL;"
  // const localUrl="http://localhost:5000/api/applications"
  const { formData } = useApplication();

  // const handleSubmit = async () => {
  //   const form = new FormData();
  //   Object.keys(formData).forEach((key) => {
  //     if (formData[key] instanceof File) {
  //       form.append(key, formData[key]);
  //     } else {
  //       form.append(key, JSON.stringify(formData[key]));
  //     }
  //   });

  //   try {
  //     const res = await axios.post("http://localhost:5000/api/applications", form, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //     alert("Application submitted successfully!");
  //     console.log(res.data);
  //   } catch (err) {
  //     console.error(err);
  //     alert("Error submitting application");
  //   }
  // };


  const handleSubmit = async () => {
    // 1️⃣ Validate required fields
    const emptyFields = Object.keys(formData).filter((key) => {
      const value = formData[key];
      // If it's a File, check if it's undefined/null
      if (value instanceof File) return !value;
      // For other fields, check if it's empty, null or undefined
      return !value || (typeof value === "string" && value.trim() === "");
    });

    if (emptyFields.length > 0) {
      alert(`Please fill all required fields: ${emptyFields.join(", ")}`);
      return; // Stop submission
    }
    setIsSubmitting(true);
    // 2️⃣ Submit form
    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] instanceof File) {
        form.append(key, formData[key]);
      } else {
        form.append(key, JSON.stringify(formData[key]));
      }
    });

    try {
      const res = await axios.post(
        `${renderUrl}/api/applications`,
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Application submitted successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Error submitting application");
    }
     finally {
      setIsSubmitting(false); // reset loading state
    }
  };
  return (
    <div className="">
      <h2 className="">Review Your Application</h2>
      <pre className="">{JSON.stringify(formData, null, 2)}</pre>
      <button
      disabled={isSubmitting} 
      className="submit-btn"
      onClick={handleSubmit}>
       {isSubmitting ? "Wait..." : "Submit Application"}
      </button>
    </div>
  );
}
