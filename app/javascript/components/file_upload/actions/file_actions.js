import { postFile } from '../services';

export const RECEIVE_FILE = 'RECEIVE_FILE';

export const receiveFile = (file) => ({
  type: RECEIVE_FILE,
  file
});

export const sendFile = (file) => (dispatch) => {
  postFile('/purchase_orders', file)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
