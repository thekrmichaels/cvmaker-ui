/* eslint-disable no-unused-vars */
import Background from "./Background";

const BackgroundRepository = {
  create: (resource, background = Background) => Promise.resolve(),
  read: (resource, userId = Background.user_id) => Promise.resolve([]),
  update: (resource, id = Background._id, background = Background) => Promise.resolve(),
  delete: (resource, id = Background._id) => Promise.resolve()
}

export default BackgroundRepository
