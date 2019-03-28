import { connect } from 'react-redux';
import Main from './Main';
import { sendFile } from '../actions/document_actions';

const mapStateToProps = (state, { purchaseOrderId }) => ({
  purchaseOrderId
});

const mapDispatchToProps = {
  sendFile
};

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainContainer;
