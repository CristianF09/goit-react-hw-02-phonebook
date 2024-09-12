import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.contactItem}>
        <div className={styles.contactDetails}>
          <p>{name}: {number}</p>
        </div>
        <button 
          className={styles.deleteButton} 
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;