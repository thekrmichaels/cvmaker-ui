import { Background, BackgroundRepository } from "../Domain";
import { handleCreate, handleDelete, handleRead, handleUpdate } from "../../Infrastructure/handlers";

const RESTBackgroundRepository = Object.create(BackgroundRepository)

RESTBackgroundRepository.create = async (resource, background = Background) => {
  await handleCreate(resource, background)
}

RESTBackgroundRepository.read = async (resource, userId = Background.user_id) => {
  return await handleRead(resource, userId)
}

RESTBackgroundRepository.update = async (resource, id = Background.id, background = Background) => {
  await handleUpdate(id, background, resource)
}

RESTBackgroundRepository.delete = async (resource, id = Background.id) => {
  await handleDelete(id, resource)
}

export default RESTBackgroundRepository
