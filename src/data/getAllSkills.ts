import { Skill } from "../model/Skill";
import skillData from "../../src/data/skills.json";
import mentalRepresentationData from "../../src/data/mental_representations.json";
import questionData from "../../src/data/questions.json";

export const getAllSkills = (): Skill[] => {
  return skillData.map((s) => ({
    ...s,
    mentalRepresentations: mentalRepresentationData.filter(
      (mr) => mr.skillId === s.id
    ),
    questions: questionData.filter((q) => q.skillId === s.id),
  }));
};
