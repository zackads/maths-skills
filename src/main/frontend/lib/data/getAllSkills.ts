import { Skill } from "../model/Skill";
import skillData from "../data/skills.json";
import mentalRepresentationData from "../data/mental_representations.json";
import questionData from "../data/questions.json";

export const getAllSkills = (): Skill[] => {
  return skillData.map((s) => ({
    ...s,
    mentalRepresentations: mentalRepresentationData.filter(
      (mr) => mr.skillId === s.id
    ),
    questions: questionData.filter((q) => q.skillId === s.id),
  }));
};
