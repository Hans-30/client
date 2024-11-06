import React, { useState } from 'react';
import KPIAssessment from './KPIAssessment'; // Import your KPI assessment component
import IDScanPage from './IDScanPage'; // Import your ID scan component
import ScannedDataDisplay from './ScannedDataDisplay'; // Import your scanned data display component
import ConfirmationPage from './ConfirmationPage'; // Import your confirmation component
import ApplicantInfo from './ApplicantInfo'; // Use ApplicantInfo component

function JobApplicationFlow() {
  const [score, setScore] = useState(null);
  const [currentStep, setCurrentStep] = useState('kpi'); // Manage current step
  const [jobTitle, setJobTitle] = useState("Accounting Position");

  const handleDecline = () => {
    alert(`You are not allowed to apply again for the ${jobTitle} position.`);
    // Additional logic for handling decline
  };

  const handleResult = (resultScore) => {
    setScore(resultScore);
    if (resultScore >= 35) {
      alert(`Congratulations! You scored ${resultScore}. You may proceed with the application.`);
      setCurrentStep('applicantInfo'); // Move to the Applicant Info step
    } else {
      alert(`Unfortunately, you scored ${resultScore}. You cannot proceed with the application.`);
      handleDecline(); // Handle the decline
    }
  };

  const handleNext = () => {
    setCurrentStep('idScan'); // Move to the ID Scan step
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'kpi':
        return <KPIAssessment jobTitle={jobTitle} onResult={handleResult} />;
      case 'applicantInfo':
        return <ApplicantInfo onNext={handleNext} />;
      case 'idScan':
        return <IDScanPage />;
      case 'scannedData':
        return <ScannedDataDisplay />;
      case 'confirmation':
        return <ConfirmationPage />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderCurrentStep()} {/* Render the current step based on state */}
    </div>
  );
}

export default JobApplicationFlow;
