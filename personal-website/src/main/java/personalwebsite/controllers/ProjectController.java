package personalwebsite.controllers;

import org.springframework.web.bind.annotation.*;
import personalwebsite.models.Project;
import personalwebsite.services.ProjectService;

import java.util.List;

@RestController
@RequestMapping("project")
@CrossOrigin("http://localhost:3000")
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public List<Project> getProjects() {
        return projectService.getAllProjects();
    }

    @PostMapping
    public void addData() {
        Project project = new Project();
        project.setDescription("I assisted in converting an Objective C iOS app into a React-based website. This website helped young children develop their English and/or Spanish comprehension skills while allowing researchers to analyze the factors that contributed to learning.");
        project.setName("Language Development Site");
        projectService.saveProject(project);
    }
}
