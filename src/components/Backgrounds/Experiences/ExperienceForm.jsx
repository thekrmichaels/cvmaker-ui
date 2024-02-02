import { Formik, Form, Field, ErrorMessage } from "formik";
import Experience from "../../../../BoundedContext/Backgrounds/Domain/Experience";
import ensureDataIsValid from "../../../../BoundedContext/Shared/Application/ensureDataIsValid";
import RoleForm from "../Categories/RoleForm";
import fillField from "../../../helpers/fillField";
import generateId from "../../../helpers/generateId";
import useResource from "../../../hooks/useResource";

export default function ExperienceForm(
  exposeExperienceId,
  onSubmitRole,
  onSubmitExperience
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
        description: "",
      }}
      validate={(values) => {
        return ensureDataIsValid(values, Experience);
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const resource = "experiences";

        await onSubmitRole();
        await createABackground(resource, values);

        exposeExperienceId(values._id);
        onSubmitExperience();
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setValues }) => (
        <Form>
          <RoleForm
            exposeRoleId={(roleId) => fillField("name", setValues, roleId)}
            onSubmitRole={() => Promise.resolve()}
          />
          <Field name="place.name" />
          <ErrorMessage name="place.name" component="span" />
          <Field name="place.location" />
          <ErrorMessage name="place.location" component="span" />
          <Field type="date" name="startDate" />
          <ErrorMessage name="startDate" component="span" />
          <Field type="date" name="endDate" />
          <ErrorMessage name="endDate" component="span" />
          <Field name="description" />
          <ErrorMessage name="description" component="span" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
