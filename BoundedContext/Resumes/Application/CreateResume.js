import Resume from "../Domain/Resume";
import ResumeRepository from "../Domain/ResumeRepository";

export default async function createResume(resource, repository = ResumeRepository, resume = Resume) {
  await repository.create(resource, resume)
}
