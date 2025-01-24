import s from "./Contact.module.css";

const Contact = ({ contactItem, onDelete  }) => {
    const { name, phone } = contactItem
    
    const handleDeleteClick = () => {
        onDelete(contactItem); 
    };

    return (
        <div className={s.contactContainer}>
            <ul className={s.contactlist}>
                <li className={s.contactItem}>{name}</li>
                <li className={s.contactItem}>{phone}</li>
            </ul>
            <button className={s.contactBtn} type="button" onClick={handleDeleteClick}>
                Усунути
            </button>
        </div>
    );
};

export default Contact;
