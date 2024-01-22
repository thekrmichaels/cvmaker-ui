import Resume from "../Domain/Resume";
import ResumeRepository from "../Domain/ResumeRepository";
import { handleCreate, handleDelete, handleRead, handleUpdate } from "../../Shared/Infrastructure/handlers";

const RESTResumeRepository = Object.create(ResumeRepository)

RESTResumeRepository.create = async (resource, resume = Resume) => {
  await handleCreate(resource, resume)
}

RESTResumeRepository.read = async (resource, userId = Resume.user_id) => {
  return await handleRead(resource, userId)
}

RESTResumeRepository.update = async (resource, id = Resume._id, resume = Resume) => {
  await handleUpdate(id, resume, resource)
}

RESTResumeRepository.delete = async (resource, id = Resume._id) => {
  await handleDelete(id, resource)
}

export default RESTResumeRepository
