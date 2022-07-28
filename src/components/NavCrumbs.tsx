import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { getSkillById } from "../data/getSkillById";
import { StyledLink } from "./StyledLink";

interface Breadcrumb {
  path: string;
  name: string;
}

export const NavCrumbs = () => {
  const router = useRouter();
  const breadcrumbs: Breadcrumb[] = toBreadcrumbs(
    stripParameters(router.asPath)
  );

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map((crumb, index) => {
        if (index < breadcrumbs.length - 1) {
          return (
            <StyledLink key={index} href={`/${crumb.path}`}>
              {crumb.name}
            </StyledLink>
          );
        } else {
          return (
            <Typography key={index} color="text.primary">
              {crumb.name}
            </Typography>
          );
        }
      })}
    </Breadcrumbs>
  );
};

const toSentenceCase = (text: string) => {
  return text[0].toUpperCase() + text.slice(1);
};

const stripParameters = (path: string): string => {
  return path.split("?")[0];
};

const toBreadcrumbs = (path: string): Breadcrumb[] => {
  const directories = path.split("/");

  if (path === "/") {
    return [{ path: "/", name: "Home" }];
  } else {
    return directories.map((d, i, arr) => {
      if (d === "") {
        return { path: d, name: "Home" };
      }

      if (arr[i - 1] === "skills") {
        return { path: d, name: getSkillById(d).title };
      }

      return { path: d, name: toSentenceCase(d) };
    });
  }
};
