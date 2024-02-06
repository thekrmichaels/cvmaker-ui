import { Background, BackgroundRepository } from "../Domain";

export default function createBackground(resource, repository = BackgroundRepository, background = Background) {
  repository.create(resource, background)
}
