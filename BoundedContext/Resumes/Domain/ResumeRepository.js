/* eslint-disable no-unused-vars */
import Resume from "./Resume";

const ResumeRepository = {
  create: (resource, resume = Resume) => Promise.resolve(),
  read: (resource, userId = Resume.user_id) => Promise.resolve([]),
  update: (resource, id = Resume._id, resume = Resume) => Promise.resolve(),
  delete: (resource, id = Resume._id) => Promise.resolve()
}

export default ResumeRepository
