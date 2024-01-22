import { z } from 'zod';
import backgroundId from "../../../BoundedContext/Shared/Backgrounds/Domain/ValueObjects/BackgroundId";
import categoryId from "../../Shared/Categories/Domain/ValueObjects/CategoryId";
import userId from "../../Shared/Users/Domain/ValueObjects/UserId";

const Resume = z.object({
  _id: z.string(),
  user_id: userId,
  titleName: categoryId,
  contacts: z.array(categoryId),
  descriptionContent: categoryId,
  experiences: z.array(backgroundId),
  educations: z.array(backgroundId),
})

export default Resume
