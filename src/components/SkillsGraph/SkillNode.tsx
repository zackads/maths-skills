import { StyledLink } from "../NavCrumbs";
import { Skill } from "../../model/Skill";
import { Card, CardContent } from "@mui/material";
import { Handle, Position } from "react-flow-renderer";

export const SkillNode = ({ data }: { data: { skill: Skill } }) => {
  return (
    <>
      <Handle type={"target"} position={Position.Bottom} hidden />
      <Handle type={"source"} position={Position.Bottom} hidden />
      <Card sx={{ maxWidth: 200, maxHeight: 200 }}>
        <CardContent>
          <StyledLink href={`/${data.skill.id}`}>{data.skill.title}</StyledLink>
        </CardContent>
      </Card>
    </>
  );
};
