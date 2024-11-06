import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadDocuments.css';

const UploadDocuments = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Navigates to the previous page
    };

    return (
        <div className="upload-documents">
            <h2>Upload Documents</h2>
            <form>
                <label htmlFor="id-upload">Upload ID:</label>
                <input type="file" id="id-upload" name="id-upload" required />

                <label htmlFor="resume-upload">Upload Resume:</label>
                <input type="file" id="resume-upload" name="resume-upload" required />

                <div className="button-container">
                    <button type="button" className="back-button" onClick={handleBack}>Back</button>
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UploadDocuments;
