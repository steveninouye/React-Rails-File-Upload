import React from 'react';
import PropTypes from 'prop-types';
class HelloWorld extends React.Component {
  handleChange = (e) => {
    const formData = new FormData();
    ////////   FOR UPLOADING MULTIPLE FILES
    // const files = Array.from(e.target.files);
    // files.forEach((file, i) => {
    //   formData.append('document', file);
    // });
    debugger;
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={this.handleChange}
          // multiple           multiple keyword can be used to allow user to upload multiple files
        />
      </React.Fragment>
    );
  }
}

export default HelloWorld;
