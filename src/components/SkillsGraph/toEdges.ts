import { Skill } from "../../model/Skill";
import { Edge } from "react-flow-renderer";

export const toEdges = (skills: Skill[]) => {
  const edges: Edge[] = [];

  skills.forEach((skill) => {
    skill.prereqs.forEach((prereq) => {
      edges.push({
        id: `${prereq}->${skill.id}`,
        source: prereq,
        target: skill.id,
        type: "floating",
      });
    });
  });

  return edges;
};
