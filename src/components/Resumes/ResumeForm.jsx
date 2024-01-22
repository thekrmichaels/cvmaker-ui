import { Formik, Form } from "formik";
import ContactForm from "../Categories/ContactForm";
import DescriptionForm from "../Categories/DescriptionForm";
import EducationForm from "../Backgrounds/EducationForm";
import ExperienceForm from "../Backgrounds/ExperienceForm";
import TitleForm from "../Categories/TitleForm";
import fillField from "../../helpers/fillField";
import useResource from "../../hooks/useResource";

export default function ResumeForm(
  onSubmitTitle,
  onSubmitContact,
  onSubmitDescription,
  onSubmitExperience,
  onSubmitEducation
) {
  const { createAResume, userId } = useResource();

  return (
    <Formik
      initialValues={{
        user_id: userId,
        titleName: "",
        contacts: [],
        descriptionContent: "",
        experiences: [],
        educations: [],
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const resource = "resumes";

        await Promise.all([
          onSubmitTitle(),
          onSubmitContact(),
          onSubmitDescription(),
          onSubmitExperience(),
          onSubmitEducation(),
        ]);
        await createAResume(resource, values);

        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setValues }) => (
        <Form>
          <TitleForm
            exposeTitleId={(titleId) =>
              fillField("titleName", setValues, titleId)
            }
            onSubmitTitle={() => Promise.resolve()}
          />
          <ContactForm
            exposeContactId={(contactId) =>
              fillField("contacts", setValues, contactId)
            }
            onSubmitContact={() => Promise.resolve()}
          />
          <DescriptionForm
            exposeDescriptionId={(descriptionId) =>
              fillField("descriptionContent", setValues, descriptionId)
            }
            onSubmitDescription={() => Promise.resolve()}
          />
          <ExperienceForm
            exposeExperienceId={(experienceId) =>
              fillField("experiences", setValues, experienceId)
            }
            onSubmitExperience={() => Promise.resolve()}
          />
          <EducationForm
            exposeEducationId={(educationId) =>
              fillField("educations", setValues, educationId)
            }
            onSubmitEducation={() => Promise.resolve()}
          />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
