import React, { Component } from 'react';
import PassingUpload from './components/PassingUpload';

class Root extends Component {
  handleChange(type) {}

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
