import { useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import useResource from "../hooks/useResource";

export default function Resumes() {
  const [resumes, setResumes] = useState(null);
  // const { user, isAuthenticated } = useAuth0();
  // const userId = isAuthenticated ? user.sub : undefined;
  const { getCategories } = useResource();

  useEffect(() => {
    async function getResumes() {
      try {
        const resource = "titles";

        const response = await getCategories(resource);

        setResumes(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error); //! Pendiente: Modificar.
      }
    }

    getResumes();
  }, [getCategories]);

  return (
    <>
      {resumes.map((resume) => (
        <li key={resume.id}>
          <Link to={`/edit/${resume.id}`}>{resume.name}</Link>
        </li>
      ))}
    </>
  );
}
