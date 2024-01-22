import { z } from "zod";
import Background from "../../Shared/Backgrounds/Domain/Background";

const Education = Background.extend({
  name: z.string().refine(value => !!value, {
    message: 'The career is required',
  }).refine(value => typeof value === 'string', {
    message: 'The career must be a string',
  })
})

export default Education
