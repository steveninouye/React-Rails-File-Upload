import React, { Component } from 'react';
import connect from 'react-redux';
import PassingUpload from './components/PassingUpload';
import { sendFile } from './actions/file_actions';

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

const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = { sendFile };

export default Root;
