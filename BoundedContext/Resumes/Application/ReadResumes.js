import Resume from "../Domain/Resume";
import ResumeRepository from "../Domain/ResumeRepository";

export default async function readResumes(resource, repository = ResumeRepository, userId = Resume.user_id) {
  return await repository.read(resource, userId)
}
