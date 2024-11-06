// src/PersonalInformationForm.js
import React, { useState } from 'react';
import './PersonalInformationForm.css'; // Add styles here for better form appearance

function PersonalInformationForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [resume, setResume] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here we call the onSubmit function passed down from parent, with collected data
        onSubmit({ name, email, phone, address, resume });
    };

    return (
        <div className="personal-information-form">
            <h2>Personal Information</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </label>
                
                <label>
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </label>
                
                <label>
                    Phone Number:
                    <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                    />
                </label>
                
                <label>
                    Address:
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        required 
                    />
                </label>

                <label>
                    Upload Resume:
                    <input 
                        type="file" 
                        onChange={(e) => setResume(e.target.files[0])} 
                        required 
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PersonalInformationForm;
