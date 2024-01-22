import { z } from "zod";
import Background from "../../Shared/Backgrounds/Domain/Background";

const Experience = Background.extend({
  name: z.string().refine(value => !!value, {
    message: 'The role is required',
  }).refine(value => typeof value === 'string', {
    message: 'The role must be a string',
  }),
  description: z.string().nullable()
})

export default Experience
