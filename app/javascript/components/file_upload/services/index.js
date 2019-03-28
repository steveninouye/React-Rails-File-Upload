export const authToken = document.querySelector('meta[name="csrf-token"]')
  .content;
export const authTokenHeader = { 'X-CSRF-Token': authToken };

export const get = (url) =>
  fetch(url, { method: 'GET', headers: { ...authTokenHeader } }).then((res) =>
    res.json()
  );

export const postFile = (url, fileData) =>
  fetch(url, {
    method: 'POST',
    body: fileData,
    headers: { ...authTokenHeader }
  }).then((res) => res.json());
