import { useEffect, useMemo, useState } from "react";
import createResume from "../../BoundedContext/Resumes/Application/CreateResume";
import deleteResume from "../../BoundedContext/Resumes/Application/DeleteResume";
import readResumes from "../../BoundedContext/Resumes/Application/ReadResumes";
import updateResume from "../../BoundedContext/Resumes/Application/UpdateResume";
import RESTResumeRepository from "../../BoundedContext/Resumes/Infrastructure/RESTResumeRepository";

export default function useResume(userId) {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    async function getResumes() {
      try {
        const resource = "resumes";

        const response = await readResumes(
          resource,
          RESTResumeRepository,
          userId
        );

        setResumeData(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }

    getResumes();
  }, [userId]);

  const resumeList = useMemo(() => ({ resumeData }), [resumeData]);

  function getResumeById(resumeId) {
    return resumeList.find((resume) => resume._id === resumeId);
  }

  async function createAResume(resource, newResume) {
    try {
      await createResume(resource, RESTResumeRepository, newResume);

      setResumeData((prevData) => ({ ...prevData, ...newResume }));
    } catch (error) {
      console.error("Error al agregar categoría:", error);
    }
  }

  async function updateAResume(resource, backgroundId, modifiedResume) {
    try {
      await updateResume(
        resource,
        RESTResumeRepository,
        backgroundId,
        modifiedResume
      );

      setResumeData((prevData) => ({
        ...prevData,
        data: prevData.data.map((resume) =>
          resume._id === modifiedResume._id ? modifiedResume : resume
        ),
      }));
    } catch (error) {
      console.error("Error al actualizar categoría:", error);
    }
  }

  async function deleteAResume(resource, resumeId) {
    try {
      await deleteResume(resource, RESTResumeRepository, resumeId);

      setResumeData((prevData) => ({
        ...prevData,
        data: prevData.data.filter((resume) => resume._id !== resumeId),
      }));
    } catch (error) {
      console.error("Error al eliminar categoría:", error);
    }
  }

  return {
    resumeList,
    getResumeById,
    createAResume,
    updateAResume,
    deleteAResume,
  };
}
