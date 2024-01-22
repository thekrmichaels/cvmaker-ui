import Background from "../Domain/Background";
import BackgroundRepository from "../Domain/BackgroundRepository";

export default async function readBackgrounds(resource, repository = BackgroundRepository, userId = Background.user_id) {
  return await repository.read(resource, userId)
}
