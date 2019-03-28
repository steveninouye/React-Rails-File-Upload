import React from 'react';

const Document = ({ doc: { id, document_type, created_at } }) => (
  <a href={`/documents/${id}`}>
    {id}
    <ul>
      <li>{document_type}</li>
      <li>{created_at}</li>
    </ul>
  </a>
);

export default Document;
