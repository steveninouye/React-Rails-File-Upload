import { postFile } from '../services';

export const RECEIVE_DOCUMENT = 'RECEIVE_DOCUMENT';
export const RECEIVE_DOCUMENTS = 'RECEIVE_DOCUMENTS';

export const recieveDocs = (docs) => ({
  type: RECEIVE_DOCUMENTS,
  docs
});

export const receiveDoc = (doc) => ({
  type: RECEIVE_FILE,
  doc
});

export const sendFile = (id, file) => (dispatch) => {
  postFile(`/purchase_orders/${id}/documents`, file)
    .then((data) => dispatch(recieveDocs(data)))
    .catch((err) => console.log(err));
};
