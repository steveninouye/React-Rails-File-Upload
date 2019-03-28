import React from 'react';

const BOCUpload = ({ handleChange }) => (
  <React.Fragment>
    <input
      type="file"
      accept="image/*,application/pdf"
      onChange={handleChange('boc')}
      // multiple           multiple keyword can be used to allow user to upload multiple files
    />
  </React.Fragment>
);

export default BOCUpload;
