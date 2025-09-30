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

  return (
    <ApplicationContext.Provider value={{ step, setStep, formData, updateFormData }}>
      {children}
    </ApplicationContext.Provider>
  );
};
