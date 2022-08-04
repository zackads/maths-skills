import { Skill } from "../model/Skill";
import skills from "../data/skills.json";
import mental_representations from "../data/mental_representations.json";
import questions from "../data/questions.json";

export const getSkillById = (id: string): Skill => {
  return {
    ...skills.find((skill) => skill.id === id)!,
    mentalRepresentations: mental_representations.filter(
      (mr) => mr.skillId === id
    ),
    questions: questions.filter((q) => q.skillId === id),
  };
};
