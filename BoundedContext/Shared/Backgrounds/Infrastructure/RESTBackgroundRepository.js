import Background from "../Domain/Background";
import BackgroundRepository from "../Domain/BackgroundRepository";
import { handleCreate, handleDelete, handleRead, handleUpdate } from "../../Infrastructure/handlers";

const RESTBackgroundRepository = Object.create(BackgroundRepository)

RESTBackgroundRepository.create = async (resource, background = Background) => {
  await handleCreate(resource, background)
}

RESTBackgroundRepository.read = async (resource, userId = Background.user_id) => {
  return await handleRead(resource, userId)
}

RESTBackgroundRepository.update = async (resource, id = Background._id, background = Background) => {
  await handleUpdate(id, background, resource)
}

RESTBackgroundRepository.delete = async (resource, id = Background._id) => {
  await handleDelete(id, resource)
}

export default RESTBackgroundRepository
