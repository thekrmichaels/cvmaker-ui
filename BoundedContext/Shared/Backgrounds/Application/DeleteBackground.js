import Background from "../Domain/Background";
import BackgroundRepository from "../Domain/BackgroundRepository";

export default async function deleteBackground(resource, repository = BackgroundRepository, id = Background._id) {
  await repository.delete(resource, id)
}
