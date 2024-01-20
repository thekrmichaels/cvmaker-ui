import { Category, CategoryRepository } from "../Domain";

export default function readCategories(resource, repository = CategoryRepository, userId = Category.user_id) {
  return repository.read(resource, userId)
}
