import React, { Component } from 'react';
import { Provider } from 'react-redux';

import PassingUpload from './components/PassingUpload';
import BOLUpload from './components/BOLUpload';
import BOCUpload from './components/BOCUpload';
import DocumentsContainer from './components/DocumentsContainer';
import { sendFile } from './actions/file_actions';
import Documents from './components/Documents';
import configureStore from './reducers/root_reducer';

class Root extends Component {
  addId = (id) => (type) => {
    return (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('document[file]', file);
      formData.append('document[document_type]', type);
      sendFile(id, formData);
    };
  };

  render() {
    const { handleChange } = this;
    return (
      <Provider store={configureStore({})}>
        <div>
          <PassingUpload handleChange={this.addId(this.props.id)} />
          <BOLUpload handleChange={this.addId(this.props.id)} />
          <BOCUpload handleChange={this.addId(this.props.id)} />
          <DocumentsContainer />
        </div>
      </Provider>
    );
  }
}

export default Root;
