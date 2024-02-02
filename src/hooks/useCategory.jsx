import { useState } from "react";

export default function useContactHandlers(){
  const [datos, setDatos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const handleEditar = (index) => {
    setEditIndex(index);
    setIsEditFormVisible(true);
    setIsAddFormVisible(false);
  };

  const handleEliminar = (index) => {
    const nuevosDatos = [...datos];
    nuevosDatos.splice(index, 1);
    setDatos(nuevosDatos);
    setEditIndex(null);
    setIsAddFormVisible(false);
    setIsEditFormVisible(false);
  };

  const handleAgregar = () => {
    setEditIndex(null);
    setIsAddFormVisible(true);
    setIsEditFormVisible(false);
  };

  const handleCancelar = () => {
    setEditIndex(null);
    setIsAddFormVisible(false);
    setIsEditFormVisible(false);
  };

  const handleAceptar = (index, valor) => {
    const nuevosDatos = [...datos];
    if (index !== null) {
      nuevosDatos[index] = valor;
    } else {
      nuevosDatos.push(valor);
    }
    setDatos(nuevosDatos);
    setEditIndex(null);
    setIsAddFormVisible(false);
    setIsEditFormVisible(false);
  };

  return {
    datos,
    editIndex,
    isAddFormVisible,
    isEditFormVisible,
    handleEditar,
    handleEliminar,
    handleAgregar,
    handleCancelar,
    handleAceptar,
  };
}

/*
import { useState } from "react";
import createCategory from "../../BoundedContext/Shared/Categories/Application/CreateCategory";
import deleteCategory from "../../BoundedContext/Shared/Categories/Application/DeleteCategory";
import readCategories from "../../BoundedContext/Shared/Categories/Application/ReadCategories";
import updateCategory from "../../BoundedContext/Shared/Categories/Application/UpdateCategory";
import RESTCategoryRepository from "../../BoundedContext/Shared/Categories/Infrastructure/RESTCategoryRepository";
import generateId from "../helpers/generateId";

export default function useCategory(userId) {
  const [categoryData, setCategoryData] = useState([]);

  async function getCategories(resource) {
    try {
      const categories = await readCategories(
        resource,
        RESTCategoryRepository,
        userId
      );

      setCategoryData(categories);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  }

  function getCategoryById(categoryId) {
    return categoryData.find((category) => category._id === categoryId);
  }

  async function createACategory(resource, newCategory) {
    try {
      // const response =
      await createCategory(resource, RESTCategoryRepository, newCategory);
      /*
      setCategoryData((prevData) => ({
        ...prevData,
        [resource]: [...prevData[resource], response.data],
      }));
    
    } catch (error) {
      if (error.response.status === 409) {
        newCategory._id = generateId();

        await createCategory(resource, RESTCategoryRepository, newCategory);
      }
    }
  }

  async function updateACategory(resource, categoryId, modifiedCategory) {
    try {
      // const response =
      await updateCategory(
        resource,
        RESTCategoryRepository,
        categoryId,
        modifiedCategory
      );
      /*
      setCategoryData((prevData) => ({
        ...prevData,
        [resource]: prevData[resource].map((category) =>
          category._id === categoryId ? response.data : category
        ),
      }));
    
    } catch (error) {
      console.error("Error al actualizar categoría:", error);
    }
  }

  async function deleteACategory(resource, categoryId) {
    try {
      await deleteCategory(resource, RESTCategoryRepository, categoryId);

      setCategoryData((prevData) => ({
        ...prevData,
        [resource]: prevData[resource].filter(
          (category) => category._id !== categoryId
        ),
      }));
    } catch (error) {
      console.error("Error al eliminar categoría:", error);
    }
  }

  return {
    categoryData,
    getCategories,
    getCategoryById,
    createACategory,
    updateACategory,
    deleteACategory,
  };
}
*/