import { Skill } from "../model/Skill";
import skills from "../../src/data/skills.json";
import mental_representations from "../../src/data/mental_representations.json";
import questions from "../../src/data/questions.json";

export const getSkillById = (id: string): Skill => {
  return {
    ...skills.find((skill) => skill.id === id)!,
    mentalRepresentations: mental_representations.filter(
      (mr) => mr.skillId === id
    ),
    questions: questions.filter((q) => q.skillId === id),
  };
};
