import React, { useState } from 'react';

function EssayQuestion() {
    const [essayResponse, setEssayResponse] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (e) => {
        setEssayResponse(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle essay submission logic here (e.g., send to server or store in state)
        console.log('Essay submitted:', essayResponse);
        
        // Simulate a successful submission
        setSubmissionStatus('Your essay has been submitted successfully!');
        setEssayResponse(''); // Clear the textarea
    };

    return (
        <div className="essay-question">
            <h2>Essay Question</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Please describe why you think you are a suitable candidate for this position:
                    <textarea 
                        value={essayResponse} 
                        onChange={handleChange} 
                        rows="6" 
                        cols="50" 
                        required 
                    />
                </label>
                <br />
                <button type="submit">Submit Essay</button>
            </form>
            {submissionStatus && <p>{submissionStatus}</p>} {/* Feedback message */}
        </div>
    );
}

export default EssayQuestion;
