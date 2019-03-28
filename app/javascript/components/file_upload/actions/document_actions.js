import * as Services from '../services';

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

export const getDocuments = (purchaseOrderId) => (dispatch) => {
  Services.get(`/purchase_orders/${purchaseOrderId}/documents`)
    .then((data) => dispatch(recieveDocs(data)))
    .catch((err) => console.log(err));
};

export const sendFile = (purchaseOrderId, file) => (dispatch) => {
  Services.postFile(`/purchase_orders/${purchaseOrderId}/documents`, file)
    .then((data) => dispatch(recieveDoc(data[0])))
    .catch((err) => console.log(err));
};
