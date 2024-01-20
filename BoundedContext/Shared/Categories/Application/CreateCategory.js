import { Category, CategoryRepository } from "../Domain";

export default function createCategory(resource, repository = CategoryRepository, category = Category) {
  repository.create(resource, category)
}
