package personalwebsite.controllers;

import aj.org.objectweb.asm.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;
import personalwebsite.models.Course;
import personalwebsite.services.CourseService;

import java.io.InputStream;
import java.util.List;

@RestController
@RequestMapping("course")
@CrossOrigin("http://localhost:3000")
public class CourseController {
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    public List<Course> getCourses() {
        return courseService.getAllCourses();
    }

    @PostMapping
    public void addData() {

    }

}
