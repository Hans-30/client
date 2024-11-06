import React from 'react';
import ownerPhoto from './Assets/558-5589426_become-a-meeting-guest-guest-icon-png-transparent.png';
import hrPhoto from './Assets/558-5589426_become-a-meeting-guest-guest-icon-png-transparent.png';
import hiringManagerPhoto from './Assets/558-5589426_become-a-meeting-guest-guest-icon-png-transparent.png';
import './Profile.css'; // Ensure this CSS file is created and linked

const Profile = () => {
  const ownerInfo = {
    name: "Christopher John Famadico",
    age: 45,
    profession: "Business Owner",
    photo: ownerPhoto
  };

  const hrInfo = {
    name: "Larian Dea Besas",
    age: 38,
    profession: "HR Manager",
    photo: hrPhoto
  };

  const hiringManagerInfo = {
    name: "Mark Johnson",
    age: 40,
    profession: "Hiring Manager",
    photo: hiringManagerPhoto
  };

  return (
    <div className="profile-container">
      {/* Business Owner Section */}
      <div className="profile-card">
        <div className="header-container">
          <h3>Business Owner</h3>
        </div>
        <div className="card-content">
          <div className="photo-container">
            <img src={ownerInfo.photo} alt={ownerInfo.name} />
          </div>
          <div className="info-container">
            <p>Name: {ownerInfo.name}</p>
            <p>Age: {ownerInfo.age}</p>
            <p>Profession: {ownerInfo.profession}</p>
          </div>
        </div>
      </div>

      {/* HR Manager Section */}
      <div className="profile-card">
        <div className="header-container">
          <h3>HR Manager</h3>
        </div>
        <div className="card-content">
          <div className="photo-container">
            <img src={hrInfo.photo} alt={hrInfo.name} />
          </div>
          <div className="info-container">
            <p>Name: {hrInfo.name}</p>
            <p>Age: {hrInfo.age}</p>
            <p>Profession: {hrInfo.profession}</p>
          </div>
        </div>
      </div>

      {/* Hiring Manager Section */}
      <div className="profile-card">
        <div className="header-container">
          <h3>Hiring Manager</h3>
        </div>
        <div className="card-content">
          <div className="photo-container">
            <img src={hiringManagerInfo.photo} alt={hiringManagerInfo.name} />
          </div>
          <div className="info-container">
            <p>Name: {hiringManagerInfo.name}</p>
            <p>Age: {hiringManagerInfo.age}</p>
            <p>Profession: {hiringManagerInfo.profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
