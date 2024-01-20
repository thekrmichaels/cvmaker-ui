import { z } from "zod";
import Category from "../../Shared/Categories/Domain/Category";

const Role = Category.extend({
  name: z.string().refine(value => !!value, {
    message: 'The role is required',
  }).refine(value => typeof value === 'string', {
    message: 'The role must be a string',
  })
})

export default Role
