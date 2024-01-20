import { z } from "zod";
import Category from "../../Shared/Categories/Domain";

const Career = Category.extend({
  name: z.string().refine(value => !!value, {
    message: 'The career is required',
  }).refine(value => typeof value === 'string', {
    message: 'The career must be a string',
  })
})

export default Career
