import { connect } from 'react-redux';
import Documents from './Documents';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {};

const DocumentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Documents);

export default DocumentsContainer;
