// src/ApplicantInfo.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ApplicantInfo.css';

const ApplicantInfo = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleNext = () => {
        navigate('/upload-documents'); // Navigate to the upload documents page
    };

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    const handleDateChange = (value, type) => {
        if (type === 'day') setDay(value);
        else if (type === 'month') setMonth(value);
        else if (type === 'year') setYear(value);
    };

    const formattedDate = month && day && year ? `${months[month - 1]} ${day}, ${year}` : '';

    return (
        <div className="applicant-info">
            <h2>Applicant Information</h2>
            
            <div className="input-container">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>

            <div className="input-container">
                <label>Birthday:</label>
                <div className="birthday-input">
                    <input type="text" placeholder="Birthday" value={formattedDate} readOnly />
                    <div className="birthday-select">
                        <select value={day} onChange={(e) => handleDateChange(e.target.value, 'day')} required>
                            <option value="">Day</option>
                            {days.map((d) => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>

                        <select value={month} onChange={(e) => handleDateChange(e.target.value, 'month')} required>
                            <option value="">Month</option>
                            {months.map((m, index) => (
                                <option key={m} value={index + 1}>{m}</option>
                            ))}
                        </select>

                        <select value={year} onChange={(e) => handleDateChange(e.target.value, 'year')} required>
                            <option value="">Year</option>
                            {years.map((y) => (
                                <option key={y} value={y}>{y}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="input-container">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
            </div>

            <div className="input-container">
                <label htmlFor="school">Educational Attainment:</label>
                <input type="text" id="school" name="school" required />
            </div>

            <div className="input-container">
                <label htmlFor="experience">Year of Work Experience:</label>
                <input type="text" id="experience" name="experience" required />
            </div>

            <div className="input-container">
                <label htmlFor="total-experience">Total Work Experience:</label>
                <input type="text" id="total-experience" name="total-experience" required />
            </div>

            <div className="input-container full-width">
                <label htmlFor="work">Previous Work:</label>
                <textarea id="work" name="work" rows="3" required />
            </div>

            <div className="button-container">
                <button className="back-button" onClick={handleBack}>Back</button>
                <button className="next-button" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default ApplicantInfo;
