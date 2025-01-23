
import './App.css'
import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';


const App = () => {
      const [contacts, setContacts] = useState({});
      const [newContact, setNewContact] = useState(0)
     
      const AddContact = (newContact) => {
            setContacts(prev => ({ ...prev, newContact }))
      }
      const addNewCard = () => {
           setNewContact(prev => prev+1)
      }
      


  return (
<div className="appStyle">
            <h1>Phonebook</h1>
            <SearchBox />
            <ContactForm onNewContact={AddContact} onCard={addNewCard} />  
            <ContactList contact={contacts} cards={newContact} />
              
</div>
  );
};




export default App
