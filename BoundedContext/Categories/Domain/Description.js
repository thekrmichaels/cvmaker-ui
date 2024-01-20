import { z } from "zod";
import Category from "../../Shared/Categories/Domain/Category";

const Description = Category.extend({
  content: z.string().refine(value => !!value, {
    message: 'The description is required',
  }).refine(value => typeof value === 'string', {
    message: 'The description must be a string',
  })
})

export default Description
