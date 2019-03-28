export const authToken = document.querySelector('meta[name="csrf-token"]')
  .content;

export const get = (url) => fetch(url).then((res) => res.json());
export const postFile = (url, fileData) =>
  fetch(url, {
    method: 'POST',
    body: fileData,
    headers: { 'X-CSRF-Token': authToken }
  }).then((res) => res.json());

// .setRequestHeader('X-CSRF-Token', token)
// "?&authenticity_token="
