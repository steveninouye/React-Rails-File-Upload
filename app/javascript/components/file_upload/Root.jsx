import React, { Component } from 'react';

import PassingUpload from './components/PassingUpload';
import BOLUpload from './components/BOLUpload';
import BOCUpload from './components/BOCUpload';
import { sendFile } from './actions/file_actions';

class Root extends Component {
  handleChange(type) {
    return (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('purchase_order[document]', file);
      formData.append('purchase_order[document_type]', type);
      sendFile(formData);
    };
  }

  render() {
    const { handleChange } = this;
    return (
      <React.Fragment>
        Root Component
        <PassingUpload handleChange={handleChange} />
        <BOLUpload handleChange={handleChange} />
        <BOCUpload handleChange={handleChange} />
      </React.Fragment>
    );
  }
}

export default Root;

// import React from 'react';
// import { Provider } from 'react-redux';
// import { HashRouter } from 'react-router-dom';

// import Router from './Router';

// const Root = ({ store }) => (
//    // <Provider store={store}>
//    <Provider store={store}>
//       <HashRouter>
//          <Router />
//       </HashRouter>
//    </Provider>
// );

// export default Root;

// const mapStateToProps = (state, ownProps) => ({});
// const mapDispatchToProps = { sendFile };
