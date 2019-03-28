import React from 'react';

const PassingUpload = ({ handleChange }) => (
  <React.Fragment>
    <input
      type="file"
      accept="image/*,application/pdf"
      onChange={handleChange('passing')}
      // multiple           multiple keyword can be used to allow user to upload multiple files
    />
  </React.Fragment>
);

export default PassingUpload;
