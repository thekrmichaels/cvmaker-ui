import { Background, BackgroundRepository } from "../Domain";

export default function readBackgrounds(resource, repository = BackgroundRepository, userId = Background.user_id) {
  return repository.read(resource, userId)
}
