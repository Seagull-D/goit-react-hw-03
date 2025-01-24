import s from "./ContactForm.module.css";
import { Field, Form, Formik } from 'formik';

const ContactForm = ({ handleSubmit, handleFiltr }) => {
    const initialValues = {
        name: "",
        phone: ""
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.formStyle}>
                <label className={s.labelText}>
                    <p>Ім'я</p>
                    <Field type="text" name="name" placeholder="Введіть ім'я" />
                </label>
                <label className={s.labelText}>
                    <p>Телефон</p>
                    <Field type="text" name="phone" placeholder="Введіть номер телефону" />
                </label>
                <button className={s.submitBtn} type="submit">Зберегти</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
