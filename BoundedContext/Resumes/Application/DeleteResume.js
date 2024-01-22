import Resume from "../Domain/Resume";
import ResumeRepository from "../Domain/ResumeRepository";

export default async function deleteResume(resource, repository = ResumeRepository, id = Resume._id) {
  await repository.delete(resource, id)
}
