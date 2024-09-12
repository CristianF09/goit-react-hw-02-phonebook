import Section from './components/Section';

return (
  <div className={styles.container}>
    <Section title="Phonebook">
      <ContactForm addContact={addContact} />
    </Section>

    <Section title="Contacts">
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </Section>
  </div>
);