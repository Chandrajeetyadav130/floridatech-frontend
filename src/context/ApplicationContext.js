// context/ApplicationContext.js
import React, { createContext, useContext, useState } from "react";

const ApplicationContext = createContext();

export const useApplication = () => useContext(ApplicationContext);
export const ApplicationProvider = ({ children }) => {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    stream: "",
    program: "",
    enrollmentInfo: {},
    personalBackground: {},
    educationHistory: [],
    emergencyContact: {},
    photo: null,
    document: null,
    signature: "",
    additionalData: {}
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Returns true if the step has all required data
const isStepCompleted = (index) => {
  switch (index) {
    case 0: // Instructions
      return true; 
    case 1: // Application Stream
      return formData.stream !== "";
    case 2: // Enrollment Information
      return Object.keys(formData.enrollmentInfo).length > 0;
    case 3: // Program of Study
      return formData.program !== "";
    case 4: // Personal Background
      return Object.keys(formData.personalBackground).length > 0;
    case 5: // Education History
      return formData.educationHistory.length > 0;
    case 6: // Emergency Contact
      return Object.keys(formData.emergencyContact).length > 0;
    case 7: // Upload Document
      return formData.document !== null;
    case 8: // Signature
      return formData.signature !== "";
    case 9: // Review
      // only complete if all previous steps are completed
      return [0,1,2,3,4,5,6,7,8].every(isStepCompleted);
    default:
      return false;
  }
};

  const resetFormData = () => {
    setFormData({}); // clears everything
  };

  return (
    <ApplicationContext.Provider value={{ step, setStep, formData, updateFormData,isStepCompleted,resetFormData }}>
      {children}
    </ApplicationContext.Provider>
  );
};
