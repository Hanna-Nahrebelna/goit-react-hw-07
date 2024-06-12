import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useId } from "react";
import { addContacts } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import css from './ContactForm.module.css'

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

   const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions)=> {        
    dispatch(addContacts(values));
    actions.resetForm();
  } 


  const contactSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    phone: Yup.number().required("Required")
  });
  
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div>
            <label className={css.label} htmlFor="username">
              Name
            </label>
            <Field
              className={css.field}
              id="username"
              type="text"
              name={nameFieldId}
            />
            <ErrorMessage
              className={css.errorName}
              name="name"
              component="span"
            />
          </div>
          <div>
            <label
              htmlFor="phone">
              Phone number
            </label>
            <Field
              className={css.field}
              id={numberFieldId}
              type="tel"
              name="number"
            />
            <ErrorMessage
              className={css.errorNumber}
              name="number"
              component="span"
            />
          </div>

          <button
            className={css.btn}
            type="submit">
            Add contact
          </button>
      </Form>
    </Formik>
    </div>
  )
}
  