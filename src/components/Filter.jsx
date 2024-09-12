import React from 'react';
import styles from './Filter.module.css'; 

const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search contacts..."
        />
      </label>
    </div>
  );
};

export default Filter;