import React from 'react';

function ScannedDataDisplay({ scannedData }) {
  return (
    <div>
      <h2>Scanned Data Display</h2>
      {/* Display scanned data here */}
      <p>Name: {scannedData.name}</p>
      <p>Birthday: {scannedData.birthday}</p>
      <p>Address: {scannedData.address}</p>
      <p>Finished School: {scannedData.finishedSchool}</p>
      <p>Current Work Experience: {scannedData.currentExperience}</p>
    </div>
  );
}

export default ScannedDataDisplay;
