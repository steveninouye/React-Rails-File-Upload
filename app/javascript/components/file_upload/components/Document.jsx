import React from 'react';

const Document = ({ doc: { id, document_type, created_at } }) => (
  <>
    {id}
    <ul>
      <li>{document_type}</li>
      <li>{created_at}</li>
    </ul>
  </>
);

export default Document;
