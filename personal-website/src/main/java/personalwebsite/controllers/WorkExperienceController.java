package personalwebsite.controllers;

import org.springframework.web.bind.annotation.*;
import personalwebsite.models.WorkExperience;
import personalwebsite.services.WorkExperienceService;

import java.util.List;

@RestController
@RequestMapping("workExperience")
@CrossOrigin("http://localhost:3000")
public class WorkExperienceController {

    private final WorkExperienceService workExperienceService;

    public WorkExperienceController(WorkExperienceService workExperienceService) {
        this.workExperienceService = workExperienceService;
    }

    @GetMapping
    public List<WorkExperience> getWorkExperiences() {
        System.out.println("getWorkExperiences is being called");
        List<WorkExperience> result = workExperienceService.getAllWorkExperiences();
        System.out.println("getWorkExperiences returned " + result);
        return result;

    }

    @PostMapping
    public void addData() {
        WorkExperience exp = new WorkExperience();
        exp.setCompany("University of Pittsburgh’s FacetLab");
        exp.setDetails(List.of("Utilized Python and programming libraries (e.g. Pandas, Matplotlib, and SciKit-Learn) to analyze large quantities of data to gain insight into student learning behavior."));
        exp.setLogo("pitt.png");
        exp.setRole("Data Analyst Research Assistant");
        exp.setLocation("Pittsburgh, PA");
        exp.setTime("December 2021 - May 2022");

        workExperienceService.saveWorkExperience(exp);

    }
}
