import React from "react";

const Contact = ({ handleDelete, contact, id }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={() => handleDelete(id)}>
        delete
      </button>
    </li>
  );
};

export default Contact;
