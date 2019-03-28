import React, { Component } from 'react';

class Documents extends Component {
  componentDidMount() {
    const { getDocuments, purchaseOrderId } = this.props;
    getDocuments(purchaseOrderId);
  }

  render() {
    return <>hello</>;
  }
}

export default Documents;
