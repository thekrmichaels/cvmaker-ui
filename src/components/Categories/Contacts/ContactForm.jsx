import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import Contact from "../../../../BoundedContext/Categories/Domain/Contact";
import ensureDataIsValid from "../../../../BoundedContext/Shared/Application/ensureDataIsValid";
import useResource from "../../../hooks/useResource";

export default function ContactForm({ defaultValue, onCancel, onSave }) {
  const { userId } = useResource();

  return (
    <Formik
      initialValues={{
        id: defaultValue ? defaultValue.id : uuidv4(),
        user_id: userId,
        category: defaultValue ? defaultValue.category : "",
        name: defaultValue ? defaultValue.name : "",
        content: defaultValue ? defaultValue.content : "",
      }}
      validate={(values) => {
        return ensureDataIsValid(values, Contact);
      }}
      onSubmit={(values, { setSubmitting }) => {
        onSave(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
          <Field name="content" />
          <ErrorMessage name="content" component="span" />

          <button type="submit" disabled={isSubmitting}>
            Accept
          </button>
          {onCancel && (
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
}

ContactForm.propTypes = {
  defaultValue: PropTypes.shape({
    id: PropTypes.string,
    user_id: PropTypes.string,
    category: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.string,
  }),
  onCancel: PropTypes.func,
  onSave: PropTypes.func.isRequired,
};
