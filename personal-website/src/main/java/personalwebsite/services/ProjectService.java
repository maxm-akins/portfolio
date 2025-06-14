package personalwebsite.services;

import org.springframework.stereotype.Service;
import personalwebsite.models.Project;
import personalwebsite.repositories.ProjectRepository;

import java.util.List;

@Service
public class ProjectService {
    private ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public void saveProject(Project project) {
        projectRepository.save(project);
    }
}
