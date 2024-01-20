import { Category, CategoryRepository } from "../Domain";

export default function updateCategory(resource, repository = CategoryRepository, id = Category.id, category = Category) {
  repository.update(resource, id, category)
}
