import { z } from "zod";

const userId = z.string({
  required_error: 'The user ID is required',
  invalid_type_error: 'The user ID must be a string'
})

export default userId
