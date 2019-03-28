import React, { Component } from 'react';

import Document from './Document';

class Documents extends Component {
  componentDidMount() {
    const { getDocuments, purchaseOrderId } = this.props;
    getDocuments(purchaseOrderId);
  }

  render() {
    const { documents } = this.props;
    return (
      <ul>
        {documents.map((doc) => (
          <Document key={doc.id} doc={doc} />
        ))}
      </ul>
    );
  }
}

export default Documents;
