package personalwebsite.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import personalwebsite.models.WorkExperience;

public interface WorkExperienceRepository extends JpaRepository<WorkExperience, Long> {
}
