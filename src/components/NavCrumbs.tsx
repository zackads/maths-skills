import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { getSkillById } from "../data/getSkillById";
import { StyledLink } from "./StyledLink";

export const NavCrumbs = () => {
  const router = useRouter();
  const path = replaceSkillIdWithName(
    new URL(router.asPath, "https://example.com").pathname.split("/")
  ).slice(1);
  const directories = path.slice(0, -1);
  const currentFile = path.slice(-1);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledLink href={"/"}>Home</StyledLink>
      {directories.map((dir, index) => {
        return (
          <StyledLink key={index} href={`/${dir}`}>
            {dir[0].toUpperCase() + dir.slice(1)}
          </StyledLink>
        );
      })}
      <Typography color="text.primary">{currentFile}</Typography>
    </Breadcrumbs>
  );
};

const replaceSkillIdWithName = (path: string[]) => {
  return path.map((element, i) => {
    if (path[i - 1] === "skills") {
      return getSkillById(element).title;
    } else {
      return element;
    }
  });
};
