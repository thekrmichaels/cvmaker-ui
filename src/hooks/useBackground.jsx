import { useEffect, useMemo, useState } from "react";
import createBackground from "../../BoundedContext/Shared/Backgrounds/Application/CreateBackground";
import deleteBackground from "../../BoundedContext/Shared/Backgrounds/Application/DeleteBackground";
import readBackgrounds from "../../BoundedContext/Shared/Backgrounds/Application/ReadBackgrounds";
import updateBackground from "../../BoundedContext/Shared/Backgrounds/Application/UpdateBackground";
import RESTBackgroundRepository from "../../BoundedContext/Shared/Backgrounds/Infrastructure/RESTBackgroundRepository";
import generateId from "../helpers/generateId";

export default function useBackground(userId) {
  const [backgroundData, setBackgroundData] = useState(null);

  useEffect(() => {
    async function getBackgrounds() {
      try {
        const resources = ["educations", "experiences"];

        const promises = resources.map(async (resource) => ({
          [resource]: (
            await readBackgrounds(resource, RESTBackgroundRepository, userId)
          ).data,
        }));

        const backgroundResponses = await Promise.all(promises);
        const newBackgroundData = Object.assign({}, ...backgroundResponses);

        setBackgroundData(newBackgroundData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }

    getBackgrounds();
  }, [userId]);

  const backgroundList = useMemo(() => backgroundData, [backgroundData]);

  function getBackgroundById(resource, backgroundId) {
    return backgroundList[resource].find(
      (background) => background._id === backgroundId
    );
  }

  async function createABackground(resource, newBackground) {
    try {
      const response = await createBackground(
        resource,
        RESTBackgroundRepository,
        newBackground
      );

      setBackgroundData((prevData) => ({
        ...prevData,
        [resource]: [...prevData[resource], response.data],
      }));
    } catch (error) {
      if (error.response.status === 409) {
        newBackground._id = generateId();

        await createBackground(
          resource,
          RESTBackgroundRepository,
          newBackground
        );
      }
    }
  }

  async function updateABackground(resource, backgroundId, modifiedBackground) {
    try {
      const response = await updateBackground(
        resource,
        RESTBackgroundRepository,
        backgroundId,
        modifiedBackground
      );

      setBackgroundData((prevData) => ({
        ...prevData,
        [resource]: prevData[resource].map((background) =>
          background._id === backgroundId ? response.data : background
        ),
      }));
    } catch (error) {
      console.error("Error al actualizar categoría:", error);
    }
  }

  async function deleteABackground(resource, backgroundId) {
    try {
      await deleteBackground(resource, RESTBackgroundRepository, backgroundId);

      setBackgroundData((prevData) => ({
        ...prevData,
        [resource]: prevData[resource].filter(
          (background) => background._id !== backgroundId
        ),
      }));
    } catch (error) {
      console.error("Error al eliminar categoría:", error);
    }
  }

  return {
    backgroundList,
    getBackgroundById,
    createABackground,
    updateABackground,
    deleteABackground,
  };
}
