import { z } from "zod";
import categoryId from "./ValueObjects/CategoryId"
import userId from "../../Users/Domain/ValueObjects/UserId"

const Category = z.object({
  id: categoryId,
  user_id: userId,
  category: categoryId
})

export default Category
