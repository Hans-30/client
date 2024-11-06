import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Address icon
import companyImage1 from './Assets/cj_g_famadico_accounting_audit_tax_and_advisory_services_cover-removebg-preview (1).png'; // First image
import companyImage2 from './Assets/Acer_Wallpaper_03_3840x2400.jpg'; // Second image
import companyImage3 from './Assets/Acer_Wallpaper_04_3840x2400.jpg'; // Third image
import companyImage4 from './Assets/Acer_Wallpaper_05_3840x2400.jpg'; // Fourth image

const ExploreCompany = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const companyInfo = {
    name: 'Guiding You Through Tomorrow',
    address: 'EFGC Building, F. Halili Ave. Maharlika SJDM, Bulacan',
    description: 'Pagpapayo at Mga Serbisyo sa Negosyo',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=EFGC+Building,+F.+Halili+Ave.+Maharlika+SJDM,+Bulacan' // Link to Google Maps
  };

  const images = [companyImage1, companyImage2, companyImage3, companyImage4];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{companyInfo.name}</h1>
      <p>{companyInfo.description}</p>

      <div style={{
        display: 'flex',
        overflowX: 'auto',
        padding: '10px',
        gap: '15px',
      }}>
        {images.map((image, index) => (
          <div key={index} style={{
            width: '300px',
            height: 'auto',
            overflow: 'hidden',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            position: 'relative',
          }}>
            <img 
              src={image} 
              alt={`Company Image ${index + 1}`} 
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                cursor: 'pointer',
              }} 
              onClick={() => openModal(image)} // Open modal on click
            />
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '5px 10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      }}>
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px' }} />
        <a 
          href={companyInfo.mapsLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: 'none', color: '#000' }} // Customize link styles
        >
          <span>{companyInfo.address}</span>
        </a>
      </div>

      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }} onClick={closeModal}>
          <img 
            src={selectedImage} 
            alt="Selected" 
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '8px',
            }} 
          />
        </div>
      )}
    </div>
  );
};

export default ExploreCompany;
