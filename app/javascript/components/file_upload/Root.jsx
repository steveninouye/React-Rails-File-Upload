import React, { Component } from 'react';
import PassingUpload from './components/PassingUpload';

class Root extends Component {
  handleChange(type) {
    return (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('document', file);
      formData.append('document_type', type);
    };
  }

  render() {
    const { handleChange } = this;
    return (
      <React.Fragment>
        Root Component
        <PassingUpload handleChange={handleChange} />
      </React.Fragment>
    );
  }
}

export default Root;
