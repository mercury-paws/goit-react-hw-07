import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

//екшен додавання контакту при сабміті

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^(?:\d{3}-\d{2}-\d{2}|\d{2}-\d{2}-\d{2})$/,
      "Number must be in the format 777-77-77 or 77-77-77"
    )
    .required("Number is required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const contactId = nanoid();
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: contactId,
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "Name",
          number: "77-77-77",
        }}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} id={contactId}>
          <label htmlFor={contactId}>Name:</label>
          <Field id={contactId} name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label htmlFor={contactId}>Number:</label>
          <Field id={contactId} type="text" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
