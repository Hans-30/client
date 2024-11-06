// src/Modal.js

import React from 'react';
import './Modal.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Modal = ({ 
    message, 
    onClose, 
    onDontProceed, // Ensure this prop is defined
    onProceed, 
    isQualified, 
    allowUploadID, 
    setAllowUploadID, 
    allowUploadResume, 
    setAllowUploadResume 
}) => {
    const isProceedDisabled = !allowUploadID || !allowUploadResume;
    const navigate = useNavigate(); // Create navigate function

    const handleClose = () => {
        onClose(); // Call the existing onClose function
    };

    const handleDontProceed = () => {
        const confirmDontProceed = window.confirm("Are you sure you don't want to proceed?"); // Confirmation dialog
        if (confirmDontProceed) {
            onDontProceed(); // Call the onDontProceed function passed as a prop
            navigate('/'); // Navigate specifically to the List of Work (home) page
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-message">{message}</div>

                {isQualified && (
                    <div className="modal-checkboxes">
                        <label>
                            <input
                                type="checkbox"
                                checked={allowUploadID}
                                onChange={(e) => setAllowUploadID(e.target.checked)}
                            />
                            Allow to upload ID
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                checked={allowUploadResume}
                                onChange={(e) => setAllowUploadResume(e.target.checked)}
                            />
                            Allow to upload digital resume
                        </label>
                    </div>
                )}

                <div className="modal-buttons">
                    {isQualified ? (
                        <>
                            <button onClick={handleDontProceed}>I Don't Want to Proceed</button> {/* Calls handleDontProceed */}
                            <button onClick={onProceed} disabled={isProceedDisabled}>Proceed</button>
                        </>
                    ) : (
                        <button onClick={handleClose}>OK</button> /* Use the existing handleClose function */ 
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
