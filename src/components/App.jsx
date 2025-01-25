import './App.css';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

const App = () => {
       const [contacts, setContacts] = useState(() => {
        const storedContacts = localStorage.getItem('saved-contacts');
        return storedContacts ? JSON.parse(storedContacts) : [];
    });
      const [searchTerm, setfiltered] = useState("");
      
      useEffect(() => {
        localStorage.setItem('saved-contacts', JSON.stringify(contacts));
    }, [contacts]);
      
      const handleFiltr = (values) => {
            setContacts(prev => [...prev, values]);
         
      }
      const handleSearchChange = (evt) => {
            setfiltered(evt.target.value.trim() || "");
      }
      const filteredContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase().trim()));
      
      const handleDelete = (contactToDelete) => {
        setContacts(prev => prev.filter(contact => contact !== contactToDelete)); // Видаляємо контакт
    };
 



      
      const handleSubmit = (values, actions) => {
          const isCopy = contacts.some(
        contact =>
            contact.name.toLowerCase().trim() === values.name.toLowerCase().trim() &&
            contact.phone === values.phone
    );

    if (isCopy) {
        alert("Контакт із таким ім'ям або номером телефону вже існує.");
        actions.setSubmitting(false); 
        return;
    }
        setContacts(prev => [...prev, values]); 
             actions.resetForm(); 
    };

    return (
        <div className="appStyle">
            <h1>Phonebook</h1>
                {contacts.length > 1 && <SearchBox searchTerm={searchTerm} onSearchChange={handleSearchChange} />}
            <ContactForm handleSubmit={handleSubmit} handleFiltr={handleFiltr} />
            <ContactList contacts={filteredContacts} onDelete={handleDelete} />
        </div>
    );
};

export default App;
