import { Formik, Form, Field, ErrorMessage } from "formik";
import Education from "../../../../BoundedContext/Backgrounds/Domain/Education";
import ensureDataIsValid from "../../../../BoundedContext/Shared/Application/ensureDataIsValid";
import TitleForm from "../Categories/TitleForm";
import fillField from "../../../helpers/fillField";
import generateId from "../../../helpers/generateId";
import useResource from "../../../hooks/useResource";

export default function EducationForm(
  exposeEducationId,
  onSubmitTitle,
  onSubmitEducation
) {
  const { createABackground, userId } = useResource();

  return (
    <Formik
      initialValues={{
        _id: generateId(),
        user_id: userId,
        name: "",
        place: {
          name: "",
          location: "",
        },
        startDate: "",
        endDate: "",
      }}
      validate={(values) => {
        return ensureDataIsValid(values, Education);
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const resource = "educations";

        await onSubmitTitle();
        await createABackground(resource, values);

        exposeEducationId(values._id);
        onSubmitEducation();
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setValues }) => (
        <Form>
          <TitleForm
            exposeTitleId={(titleId) => fillField("name", setValues, titleId)}
            onSubmitTitle={() => Promise.resolve()}
          />
          <Field name="place.name" />
          <ErrorMessage name="place.name" component="span" />
          <Field name="place.location" />
          <ErrorMessage name="place.location" component="span" />
          <Field type="date" name="startDate" />
          <ErrorMessage name="startDate" component="span" />
          <Field type="date" name="endDate" />
          <ErrorMessage name="endDate" component="span" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
