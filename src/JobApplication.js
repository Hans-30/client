// src/components/JobApplication.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobApplication.css';

function JobApplication({ job, onProceed }) {
  const [resumeSubmitted, setResumeSubmitted] = useState(false);
  const [idUploaded, setIdUploaded] = useState(false);
  const navigate = useNavigate();

  const handleApplyNow = () => {
    if (resumeSubmitted && idUploaded) {
      onProceed();
    } else {
      alert("Please agree to submit your resume and upload an ID.");
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="application-box">
      {/* Displaying the selected job's title and salary */}
      <h2>Applying for: {job?.title || "Job Title"}</h2> 
      <p className="salary">Salary: {job?.salary || "Salary Information"}</p>
      <p className="work-time">Work Time: Full-Time</p>
      
      <hr className="divider" />
      
      {/* Checkbox agreements */}
      <div className="agreement">
        <label>
          <input 
            type="checkbox" 
            checked={resumeSubmitted} 
            onChange={(e) => setResumeSubmitted(e.target.checked)} 
          /> 
          Allow to submit digital resume
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={idUploaded} 
            onChange={(e) => setIdUploaded(e.target.checked)} 
          /> 
          Upload an ID to verify correct information
        </label>
      </div>
      
      {/* Action buttons */}
      <div className="buttons">
        <button className="apply-button" onClick={handleApplyNow}>Apply Now</button>
        <button className="back-button" onClick={handleBack}>Back</button>
      </div>
    </div>
  );
}

export default JobApplication;
