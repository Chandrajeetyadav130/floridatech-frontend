// components/Sidebar.js
import React from "react";
import { useApplication } from "../context/ApplicationContext";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
const steps = [
  "Instructions",
  "Application Stream",
  "Enrollment Information",
  "Program of Study",
  "Personal Background",
  "Education History",
  "Emergency Contact",
  "Upload Document",
  "Signature",
  "Review",
];

export default function Sidebar() {
  const { step, setStep, completedSteps, isStepCompleted } = useApplication();

  return (
    <div className="sidebarMaincontainer">
      <h2 className="">Application Steps</h2>
      <ul>
        {steps.map((label, index) => (
          <li
          
            key={index}
            style={{
              display:"flex",justifyContent:"space-between",
              padding: "0.5rem", // p-2
              cursor: "pointer",
              borderRadius: "0.375rem", // rounded-md
              backgroundColor: step === index ? "#FED7D7" : undefined, // bg-red-200
              fontWeight: step === index ? "600" : "normal", // font-semibold
            }}
            onClick={() => {
              setStep(index)
            }
            }
          >
            {label}
            {isStepCompleted(index) ? (
              <FaCheckCircle color="green" />
            ) : (
              <FaRegClock color="yellow" />
            )}

          </li>
        ))}
      </ul>
    </div>
  );
}
