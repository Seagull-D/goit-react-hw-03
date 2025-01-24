import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"



const ContactList = ({ contacts }) => {

if (contacts.length === 0) {
        return <p>Список контактів порожній.</p>;
    }
  
    return (
        <div className={s.contactsList}>
            {contacts.map((contact, idx) => (
               
                <Contact key={idx} contactItem={contact} />
                 
            ))}
           
        </div>
        
    )
 }

export default ContactList