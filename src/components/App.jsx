import './App.css';
import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

const App = () => {
    const [contacts, setContacts] = useState([]); 
    const [searchTerm , setfiltered] = useState("");
  
      const handleFiltr = (values) => {
            setContacts(prev => [...prev, values]);
         
      }
      const handleSearchChange = (evt) => {
            setfiltered(evt.target.value);
      }
      const filteredContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase().trim()));
 



      
    const handleSubmit = (values, actions) => {
        setContacts(prev => [...prev, values]); 
        console.log("Оновлений список контактів:", [...contacts, values]);
        actions.resetForm(); 
    };

    return (
        <div className="appStyle">
            <h1>Phonebook</h1>
            <SearchBox searchTerm ={searchTerm } onSearchChange={handleSearchChange} />
            <ContactForm handleSubmit={handleSubmit} handleFiltr={handleFiltr} />
            <ContactList contacts={filteredContacts} />
        </div>
    );
};

export default App;
