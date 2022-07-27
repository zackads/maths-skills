import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { getSkillById } from "../data/getSkillById";
import { StyledLink } from "./StyledLink";

export const SkillNavCrumbs = () => {
  const router = useRouter();
  const path = new URL(router.asPath, "http://example.com").pathname;
  const [skillId, activity] = path.split("/").slice(1);

  if (activity) {
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <StyledLink href={"/"}>Home</StyledLink>
        <StyledLink href={`/${skillId}`}>
          {getSkillById(skillId).title}
        </StyledLink>
        <Typography color="text.primary">
          {activity[0].toUpperCase() + activity.slice(1)}
        </Typography>
      </Breadcrumbs>
    );
  } else {
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <StyledLink href={"/"}>Home</StyledLink>
        <Typography color="text.primary">
          {getSkillById(skillId).title}
        </Typography>
      </Breadcrumbs>
    );
  }
};
