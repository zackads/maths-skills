import { Skill } from "../../model/Skill";
import { Node } from "react-flow-renderer";

export const toNodes = (skills: Skill[]): Node[] =>
  skills.map((skill) => ({
    id: skill.id,
    position: { x: 0, y: 0 },
    data: { skill },
    type: "skill",
  }));
