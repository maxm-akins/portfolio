package personalwebsite.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import personalwebsite.models.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
