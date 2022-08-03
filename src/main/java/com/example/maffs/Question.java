package com.example.maffs;

import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import lombok.Getter;

@Entity
@Getter
public class Question {
    @Id
    private Integer id;

    @NotNull
    private String text;

    @ManyToOne
    @JoinColumn(name="skill_id")
    private Skill skill;

    @OneToMany(mappedBy = "question")
    private Set<Answer> acceptedAnswers;
}
