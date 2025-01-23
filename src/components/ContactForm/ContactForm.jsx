import s from "./ContactForm.module.css"
import { Field, Form, Formik } from 'formik';

const ContactForm = ({onNewContact,}) => {
    const initialValues = {
        name: "",
        phone: ""
    }
    

const handleSubmit = ({name,phone }, action) => {

    const newContact = {
        name,
        phone,
        
    }
     onNewContact(newContact) 
    action.resetForm()
   
}
     
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.formStyle}>
                <label className={s.labelText} >
                    <p>Імя</p>
                    <Field type="text" name="name" />
                </label>
                <label className={s.labelText}>
                    <p>Телефон</p>
                    <Field type="text" name="phone" />
                </label>
                <button className={s.submitBtn} type="submit">Зберегти</button>
            </Form>
        </Formik>
    )
}
export default ContactForm 