import {
  RECEIVE_DOCUMENT,
  RECEIVE_DOCUMENTS
} from '../actions/document_actions';

const documentReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_DOCUMENTS:
    case RECEIVE_DOCUMENT:

    default:
      return state;
  }
};

export default documentReducer;
