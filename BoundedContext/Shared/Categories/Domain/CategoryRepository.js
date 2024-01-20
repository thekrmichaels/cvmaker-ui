/* eslint-disable no-unused-vars */
import Category from "./Category";

const CategoryRepository = {
  create: (resource, category = new Category()) => Promise.resolve(),
  read: (resource, userId = new Category().user_id, category = new Category().category) => Promise.resolve([]),
  update: (resource, id = new Category().id, category = new Category()) => Promise.resolve(),
  delete: (resource, id = new Category().id) => Promise.resolve()
}

export default CategoryRepository
