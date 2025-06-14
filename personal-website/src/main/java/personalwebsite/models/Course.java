package personalwebsite.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String name;
    private String details;
    private String grade;
    private String semester;

    public Course() {

    }

    public Course(Long id, String code, String name, String details, String grade, String semester) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.details = details;
        this.grade = grade;
        this.semester = semester;
    }


    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Course course = (Course) o;
        return Objects.equals(code, course.code) && Objects.equals(name, course.name) && Objects.equals(details, course.details) && Objects.equals(grade, course.grade) && Objects.equals(semester, course.semester);
    }

    @Override
    public int hashCode() {
        return Objects.hash(code, name, details, grade, semester);
    }
}
