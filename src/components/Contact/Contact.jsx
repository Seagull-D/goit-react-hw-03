
import s from "./Contact.module.css"
const Contact = (contactItem) => {
    console.log(contactItem)
    const { contactItem: { newContact: { name, phone } } } = contactItem;
    return (
        <div className={s.contactContainer}>
        <ul className={s.contactlist}>
                <li className={s.contactIteam}>{name}</li>
                <li className={s.contactIteam}>{phone}</li>       
        </ul>
            <button className={s.contactBtn} type="button">Усунути</button>
        </div>
        
    )
 }

export default Contact