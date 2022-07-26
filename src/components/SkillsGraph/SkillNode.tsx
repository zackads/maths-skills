import { Skill } from "../../model/Skill";
import { Card, CardContent, Typography } from "@mui/material";
import { Handle, Position } from "react-flow-renderer";
import Link from "next/link";

export const SkillNode = ({ data }: { data: { skill: Skill } }) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <Handle type={"target"} position={Position.Bottom} hidden />
      <Handle type={"source"} position={Position.Bottom} hidden />
      <Link href={`/${data.skill.id}`}>
        <Card sx={{ maxWidth: 200, maxHeight: 200 }}>
          <CardContent>
            <Typography variant={"h5"}>{data.skill.title}</Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};
