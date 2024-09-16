import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleNumberChange = (e) => setNumber(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && number) {
      const newContact = {
        name,
        number,
        id: window.nanoid() 
      };
      addContact(newContact);  
      setName(''); 
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Z]+(([\'\-\s][a-zA-Z])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash, and spaces."
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +"
          required
        />
      </label>
      <button type="submit" className={styles.button}>Add Contact</button>
    </form>
  );
};

export default ContactForm;