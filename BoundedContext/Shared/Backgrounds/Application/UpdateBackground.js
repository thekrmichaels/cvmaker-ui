import Background from "../Domain/Background";
import BackgroundRepository from "../Domain/BackgroundRepository";

export default async function updateBackground(resource, repository = BackgroundRepository, id = Background._id, background = Background) {
  await repository.update(resource, id, background)
}
