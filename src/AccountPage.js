import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './AccountPage.css'; 
import avatar from './Assets/sa.png.png';

const AccountPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Current Status"); // Track active tab

  const employeeDetails = {
    name: "Ashlley Salvador",
    age: "19",
    position: "Engagement Assistant",
  };

  const handleLogout = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    logout();
    navigate('/employee-site');
  };

  // Render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Current Status":
        return <p>Your current status is active, and your next review is scheduled for next month.</p>;
      case "To Do List":
        return <ul><li>Complete project report</li><li>Attend team meeting</li><li>Update profile information</li></ul>;
      case "Message":
        return <p>You have no new messages at this time.</p>;
      case "Announcement":
        return <p>Company holiday party on December 15th! Don't forget to RSVP.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="account-container">
      <div className="header">
        <div className="profile-info">
          <img src={avatar} alt="Profile Avatar" className="profile-avatar" />
          <div>
            <p><strong>Name:</strong> {employeeDetails.name}</p>
            <p><strong>Age:</strong> {employeeDetails.age}</p>
            <p><strong>Position:</strong> {employeeDetails.position}</p>
          </div>
        </div>
        <button className="logout-button" onClick={handleLogout} disabled={loading}>
          {loading ? 'Logging out...' : 'Logout'}
        </button>
      </div>
      
      <div className="content-tabs">
        {["Current Status", "To Do List", "Message", "Announcement"].map((tab) => (
          <div 
            key={tab} 
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="content-area">
        {renderContent()}
      </div>
    </div>
  );
};

export default AccountPage;
