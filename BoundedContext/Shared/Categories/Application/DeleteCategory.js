import { Category, CategoryRepository } from "../Domain";

export default function deleteCategory(resource, repository = CategoryRepository, id = Category.id) {
  repository.delete(resource, id)
}
