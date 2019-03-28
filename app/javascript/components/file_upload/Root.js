import React, { Component } from 'react';
import { Provider } from 'react-redux';

import PassingUpload from './components/PassingUpload';
import BOLUpload from './components/BOLUpload';
import BOCUpload from './components/BOCUpload';
import DocumentsContainer from './components/DocumentsContainer';
import configureStore from './reducers/root_reducer';
import { sendFile } from './actions/document_actions';
import MainContainer from './components/MainContainer';

const Root = (props) => (
  <Provider store={configureStore({})}>
    <MainContainer purchaseOrderId={props.id} />
  </Provider>
);

// class Root extends Component {
//   addId = (id) => (type) => {
//     return (e) => {
//       // debugger;
//       const file = e.target.files[0];
//       const formData = new FormData();
//       formData.append('document[file]', file);
//       formData.append('document[document_type]', type);
//       sendFile(id, formData);
//     };
//   };

//   render() {
//     const { addId } = this;
//     return (
// <div>
//   <PassingUpload handleChange={addId(this.props.id)} />
//   <BOLUpload handleChange={addId(this.props.id)} />
//   <BOCUpload handleChange={addId(this.props.id)} />
//   <DocumentsContainer purchaseOrderId={this.props.id} />
// </div>
//     );
//   }
// }

export default Root;
