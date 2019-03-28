import { connect } from 'react-redux';
import Documents from './Documents';
import { getDocuments } from '../actions/document_actions';

const mapStateToProps = ({ documents }, { purchaseOrderId }) => ({
  purchaseOrderId,
  documents
});

const mapDispatchToProps = {
  getDocuments
};

const DocumentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Documents);

export default DocumentsContainer;
