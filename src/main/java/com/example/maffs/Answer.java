package com.example.maffs;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Entity
@Getter
public class Answer {
    @Id
    private Integer id;

    private String text;

    @ManyToOne
    @JoinColumn(name="question_id")
    @JsonIgnore
    private Question question;
}
