import React from 'react';

const PassingUpload = (props) => (
  <React.Fragment>
    <input
      type="file"
      accept="image/*,application/pdf"
      onChange={this.uploadFile('passing')}
      // multiple           multiple keyword can be used to allow user to upload multiple files
    />
  </React.Fragment>
);

export default PassingUpload;
