import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"



const ContactList = ({ contact, cards }) => {
  
    return (
        <div className={s.contactsList}>
            {Array(3).fill({cards}).map((__, idx) => (
             <Contact key={idx} contactItem={contact} />
            ))}
           
        </div>
        
    )
 }

export default ContactList