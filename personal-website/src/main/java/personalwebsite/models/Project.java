package personalwebsite.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String publicLink;
    private String githubLink;

    public Project() {
    }

    public Project(Long id, String name, String description, String publicLink, String githubLink) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.publicLink = publicLink;
        this.githubLink = githubLink;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPublicLink() {
        return publicLink;
    }

    public void setPublicLink(String publicLink) {
        this.publicLink = publicLink;
    }

    public String getGithubLink() {
        return githubLink;
    }

    public void setGithubLink(String githubLink) {
        this.githubLink = githubLink;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Project project = (Project) o;
        return Objects.equals(name, project.name) && Objects.equals(description, project.description) && Objects.equals(publicLink, project.publicLink) && Objects.equals(githubLink, project.githubLink);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, description, publicLink, githubLink);
    }
}
