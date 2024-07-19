import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";

import s from "./ContactForm.module.css";

const ContactForm = () => {
  const initialValues = {
    name: "",
    phone: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phone: Yup.number()
      .required("This field is required!")
      .min(9, "min 9 symbol"),
    // .max(10, "max 10 symbol"),
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name:</span>
            <Field name="name" type="text" className={s.input} />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>

          <label className={s.label}>
            <span>Phone:</span>
            <Field name="phone" type="number" className={s.input} />
            <ErrorMessage name="phone" component="span" className={s.error} />
          </label>

          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
