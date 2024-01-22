import Background from "../Domain/Background";
import BackgroundRepository from "../Domain/BackgroundRepository";

export default async function createBackground(resource, repository = BackgroundRepository, background = Background) {
  await repository.create(resource, background)
}
