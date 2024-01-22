import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import Description from "../../../../BoundedContext/Categories/Domain/Description";
import ensureDataIsValid from "../../../../BoundedContext/Shared/Application/ensureDataIsValid";
import useResource from "../../../hooks/useResource";

export default function DescriptionForm({ defaultValue, onCancel, onSave }) {
  const { userId } = useResource();

  return (
    <Formik
      initialValues={{
        id: defaultValue ? defaultValue.id : uuidv4(),
        user_id: userId,
        category: defaultValue ? defaultValue.category : "",
        content: defaultValue ? defaultValue.content : "",
      }}
      validate={(values) => {
        return ensureDataIsValid(values, Description);
      }}
      onSubmit={(values, { setSubmitting }) => {
        onSave(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
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

DescriptionForm.propTypes = {
  defaultValue: PropTypes.shape({
    id: PropTypes.string,
    user_id: PropTypes.string,
    category: PropTypes.string,
    content: PropTypes.string,
  }),
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};
