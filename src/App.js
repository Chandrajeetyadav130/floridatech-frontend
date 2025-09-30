import { ApplicationProvider, useApplication } from "./context/ApplicationContext";
import Sidebar from "./components/Sidebar";
import StreamStep from "./components/steps/StreamStep";
import EnrollmentInfoStep from "./components/steps/EnrollmentInfoStep";
import EducationHistoryStep from "./components/steps/EducationHistoryStep";
import EmergencyContactStep from "./components/steps/EmergencyContactStep";
import PersonalBackgroundStep from "./components/steps/PersonalBackgroundStep";
import ProgramStep from "./components/steps/ProgramStep";
import ReviewStep from "./components/steps/ReviewStep";
import SignatureStep from "./components/steps/SignatureStep";
import UploadDocumentsStep from "./components/steps/UploadDocumentsStep";
import Header from "./components/Header";
function StepContent() {
  const { step } = useApplication();

  switch (step) {
    case 1: return <StreamStep />;
    case 2: return <EnrollmentInfoStep />;

    case 3: return <ProgramStep />;

    case 4: return <PersonalBackgroundStep />;
    case 5: return <EducationHistoryStep />;

    case 6: return <EmergencyContactStep />;

    case 7: return <UploadDocumentsStep />;
    case 8: return <SignatureStep />;

    case 9: return <ReviewStep />;
    default: return <div className="p-6">Instructions Step</div>;
  }
}

export default function ApplicationForm() {
  return (
    <ApplicationProvider>
      <Header/>
      <div className="application_mainPage">
        <Sidebar />
        <div className="stepContent">
          <StepContent />
        </div>
      </div>
    </ApplicationProvider>
  );
}
