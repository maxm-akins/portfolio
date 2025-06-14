package personalwebsite.services;

import org.springframework.stereotype.Service;
import personalwebsite.models.WorkExperience;
import personalwebsite.repositories.WorkExperienceRepository;

import java.util.List;

@Service
public class WorkExperienceService {
    private WorkExperienceRepository workExperienceRepository;

    public WorkExperienceService(WorkExperienceRepository workExperienceRepository) {
        this.workExperienceRepository = workExperienceRepository;
    }

    public List<WorkExperience> getAllWorkExperiences() {
        return workExperienceRepository.findAll();
    }

    public void saveWorkExperience(WorkExperience workExperience) {
        workExperienceRepository.save(workExperience);
    }
}
