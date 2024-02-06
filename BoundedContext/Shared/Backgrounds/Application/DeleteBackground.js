import { Background, BackgroundRepository } from "../Domain";

export default function deleteBackground(resource, repository = BackgroundRepository, id = Background.id) {
  repository.delete(resource, id)
}
