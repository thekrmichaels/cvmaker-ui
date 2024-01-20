import { z } from "zod";
import Category from "../../Shared/Categories/Domain/Category";

const Contact = Category.extend({
  name: z.string().refine(value => !!value, {
    message: 'The contact type is required',
  }).refine(value => typeof value === 'string', {
    message: 'The contact type must be a string',
  }),
  content: z.string().refine(value => !!value, {
    message: 'The contact is required',
  }).refine(value => typeof value === 'string', {
    message: 'The contact must be a string',
  })
})

export default Contact
