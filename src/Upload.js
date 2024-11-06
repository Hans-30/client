import React from 'react';

function UploadPage() {
  return (
    <div>
      <h2>Upload Your ID and Resume</h2>
      <form>
        <div>
          <label>
            ID Upload:
            <input type="file" accept="image/*" />
          </label>
        </div>
        <div>
          <label>
            Resume Upload:
            <input type="file" accept=".pdf,.doc,.docx" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UploadPage;
