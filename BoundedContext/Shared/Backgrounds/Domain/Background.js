import { z } from "zod";
import backgroundId from "./ValueObjects/BackgroundId";
import categoryId from "../../Categories/Domain/ValueObjects/CategoryId"
import userId from "../../Users/Domain/ValueObjects/UserId"

const Background = z.object({
  _id: backgroundId,
  user_id: userId,
  category: categoryId,
  name: categoryId,
  place: {
    name: z.string().refine(value => !!value, {
      message: 'The place is required',
    }).refine(value => typeof value === 'string', {
      message: 'The place must be a string',
    }),
    location: z.string().refine(value => !!value, {
      message: 'The location is required',
    }).refine(value => typeof value === 'string', {
      message: 'The location must be a string',
    })
  },
  startDate: z.date().refine((date) => date !== undefined, {
    message: 'The start date is required',
  }).refine((date) => date < new Date(), {
    message: 'The start date must be less than now',
  }),
  endDate: z.date().refine((date, data) => date > data.startDate, {
    message: 'The end date must be later than start date',
  }).optional()
})

export default Background
