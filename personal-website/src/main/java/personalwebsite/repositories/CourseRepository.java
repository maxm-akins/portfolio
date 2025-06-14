package personalwebsite.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import personalwebsite.models.Course;
import personalwebsite.models.WorkExperience;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
