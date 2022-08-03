package com.example.maffs;

import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import lombok.Getter;

@Entity
@Getter
public class Skill {
    @Id
    private String id;

    @NotNull
    private String name;

    @NotNull
    private String description;

    @NotNull
    @OneToMany(mappedBy = "skill")
    private Set<Question> questions;

    @NotNull
    @OneToMany(mappedBy = "skill")
    private Set<MentalRepresentation> mentalRepresentations;

    @ManyToMany
    @JoinTable(
            name = "skill_requirement",
            joinColumns = @JoinColumn(name = "skill_id"),
            inverseJoinColumns = @JoinColumn(name = "requires_id")
    )
    private Set<Skill> requires;

    @ManyToMany(mappedBy = "requires")
    private Set<Skill> requiredBy;
}
