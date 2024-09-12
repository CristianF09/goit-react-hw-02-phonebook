import React from 'react';
import styles from './ContactListItem.module.css'; 

const ContactListItem = ({ contact, onDelete }) => {
  return (
    <li className={styles.contactListItem}>
      <span>{contact.name}: {contact.number}</span>
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;