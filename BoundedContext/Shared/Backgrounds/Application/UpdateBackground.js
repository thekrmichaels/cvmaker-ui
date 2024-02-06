import { Background, BackgroundRepository } from "../Domain";

export default function updateBackground(resource, repository = BackgroundRepository, id = Background.id, background = Background) {
  repository.update(resource, id, background)
}
