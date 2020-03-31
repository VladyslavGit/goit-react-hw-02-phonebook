import React from "react";

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <li>
        <span>{contact.name}: </span>
        <span>{contact.number}</span>
        <button type="button" id={contact.id} onClick={deleteContact}>
          DELETE
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
