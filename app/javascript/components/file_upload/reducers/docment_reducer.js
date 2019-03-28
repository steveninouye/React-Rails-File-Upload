import {
  RECEIVE_DOCUMENT,
  RECEIVE_DOCUMENTS
} from '../actions/document_actions';

const documentReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_DOCUMENTS:
      return action.docs;
    case RECEIVE_DOCUMENT:
      return state.concat([action.doc]);
    default:
      return state;
  }
};

export default documentReducer;
