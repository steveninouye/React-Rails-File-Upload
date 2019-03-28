import React from 'react';

const BOLUpload = ({ handleChange }) => (
  <React.Fragment>
    <input
      type="file"
      accept="image/*,application/pdf"
      onChange={handleChange('bol')}
      // multiple           multiple keyword can be used to allow user to upload multiple files
    />
  </React.Fragment>
);

export default BOLUpload;
