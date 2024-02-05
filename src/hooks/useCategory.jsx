import { useState } from "react";
import {
  createCategory,
  deleteCategory,
  readCategories,
  updateCategory,
} from "../../BoundedContext/Shared/Categories/Application";
import RESTCategoryRepository from "../../BoundedContext/Shared/Categories/Infrastructure/RESTCategoryRepository";

export default function useCategory(userId) {
  const [categoryData, setCategoryData] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  function handleAdd() {
    setCategoryId(null);
    setIsAddFormVisible(true);
    setIsEditFormVisible(false);
  }

  function handleCancel() {
    setCategoryId(null);
    setIsAddFormVisible(false);
    setIsEditFormVisible(false);
  }

  async function handleCreate(resource, newCategory) {
    await createCategory(resource, RESTCategoryRepository, newCategory);

    setCategoryData((prevData) => [...prevData, newCategory]);
    setCategoryId(null);
    setIsAddFormVisible(false);
    setIsEditFormVisible(false);
  }

  async function handleDelete(id, resource, categoryId) {
    await deleteCategory(resource, RESTCategoryRepository, categoryId);

    setCategoryData((prevData) => prevData.filter((_, index) => index !== id));
    setCategoryId(null);
    setIsAddFormVisible(false);
    setIsEditFormVisible(false);
  }

  function handleEdit(id) {
    setCategoryId(id);
    setIsEditFormVisible(true);
    setIsAddFormVisible(false);
  }

  async function handleRead(resource) {
    const categories = await readCategories(
      resource,
      RESTCategoryRepository,
      userId
    );
    const categoriesArray = Object.values(categories).map((category) => ({
      id: category._id,
      ...category,
    }));

    if (JSON.stringify(categoriesArray) !== JSON.stringify(categoryData)) {
      setCategoryData(categoriesArray);
    }
  }

  async function handleUpdate(id, resource, updatedCategory) {
    await updateCategory(
      resource,
      RESTCategoryRepository,
      updatedCategory.id,
      updatedCategory
    );

    setCategoryData((prevData) =>
      prevData.map((category, index) =>
        index === id ? { ...category, ...updatedCategory } : category
      )
    );
    setCategoryId(null);
    setIsAddFormVisible(false);
    setIsEditFormVisible(false);
  }

  return {
    categoryData,
    categoryId,
    handleAdd,
    handleCancel,
    handleCreate,
    handleDelete,
    handleEdit,
    handleRead,
    handleUpdate,
    isAddFormVisible,
    isEditFormVisible,
  };
}
