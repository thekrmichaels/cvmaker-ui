import { Category, CategoryRepository } from "../Domain";
import { handleCreate, handleDelete, handleRead, handleUpdate } from "../../Infrastructure/handlers";

const RESTCategoryRepository = Object.create(CategoryRepository)

RESTCategoryRepository.create = (resource, category = Category) => {
  handleCreate(resource, category)
}

RESTCategoryRepository.read = (resource, userId = Category.userid) => {
  return handleRead(resource, userId)
}

RESTCategoryRepository.update = (resource, id = Category.id, category = Category) => {
  handleUpdate(id, category, resource)
}

RESTCategoryRepository.delete = (resource, id = Category.id) => {
  handleDelete(id, resource)
}

export default RESTCategoryRepository
