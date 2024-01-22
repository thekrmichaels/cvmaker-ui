import Resume from "../Domain/Resume";
import ResumeRepository from "../Domain/ResumeRepository";

export default async function updateResume(resource, repository = ResumeRepository, id = Resume._id, resume = Resume) {
  await repository.update(resource, id, resume)
}
