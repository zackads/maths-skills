package com.example.maffs;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Entity
@Getter
public class MentalRepresentation {
    @Id
    private Integer id;

    @ManyToOne
    @JoinColumn(name="skill_id")
    @JsonIgnore
    private Skill skill;

    private String bodyMarkdown;
}
