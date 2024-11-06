import React from 'react';
import './JobList.css';

const JobList = ({ jobs, onApply }) => {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div key={job.title} className="job-item">
          <h3>{job.title}</h3>
          <p>Salary: {job.salary}</p>
          <p>Remaining Need: {job.remaining}</p>
          <button onClick={() => onApply(job.title)}>Apply Now</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
