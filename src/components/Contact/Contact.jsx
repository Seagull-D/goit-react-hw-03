import s from "./Contact.module.css";

const Contact = ({ contactItem }) => {
   const{name, phone} = contactItem
    return (
        <div className={s.contactContainer}>
            <ul className={s.contactlist}>
                <li className={s.contactItem}>{name}</li>
                <li className={s.contactItem}>{phone}</li>
            </ul>
            <button className={s.contactBtn} type="button">
                Усунути
            </button>
        </div>
    );
};

export default Contact;
