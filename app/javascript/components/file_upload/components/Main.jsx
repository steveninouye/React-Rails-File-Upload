import React, { Component } from 'react';

import PassingUpload from './PassingUpload';
import BOLUpload from './BOLUpload';
import BOCUpload from './BOCUpload';
import DocumentsContainer from './DocumentsContainer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type) {
    const { sendFile, purchaseOrderId } = this.props;
    return (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('document[file]', file);
      formData.append('document[document_type]', type);
      sendFile(purchaseOrderId, formData);
    };
  }

  render() {
    const { purchaseOrderId } = this.props;
    return (
      <div>
        <PassingUpload handleChange={this.handleChange} />
        <BOLUpload handleChange={this.handleChange} />
        <BOCUpload handleChange={this.handleChange} />
        <DocumentsContainer purchaseOrderId={purchaseOrderId} />
      </div>
    );
  }
}

export default Main;
