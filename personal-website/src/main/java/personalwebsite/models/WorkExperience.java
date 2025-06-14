package personalwebsite.models;

import jakarta.persistence.*;

import java.util.*;

@Entity
public class WorkExperience {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String company;
    private String role;
    private String location;

    @ElementCollection
    @CollectionTable(name = "work_experience_details", joinColumns = @JoinColumn(name = "work_experience_id"))
    @Column(name = "detail", columnDefinition = "TEXT")
    private List<String> details;

    private String time;
    private String logo;

    public WorkExperience() {
    }

    public WorkExperience(Long id, String company, String role, String location, List<String> details, String time, String logo) {
        this.id = id;
        this.company = company;
        this.role = role;
        this.location = location;
        this.details = details;
        this.time = time;
        this.logo = logo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<String> getDetails() {
        return details;
    }

    public void setDetails(List<String> details) {
        this.details = details;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        WorkExperience that = (WorkExperience) o;
        return Objects.equals(company, that.company) && Objects.equals(role, that.role) && Objects.equals(location, that.location) && Objects.equals(details, that.details) && Objects.equals(time, that.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, company, role, location, details, time);
    }
}
