import { z } from "zod";
import Category from "../../Shared/Categories/Domain/Category";

const Title = Category.extend({
  name: z.string().refine(value => !!value, {
    message: 'The title is required',
  }).refine(value => typeof value === 'string', {
    message: 'The title must be a string',
  })
})

export default Title
