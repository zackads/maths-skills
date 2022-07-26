import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { getSkillById } from "../data/getSkillById";

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

export const StyledLink = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  return (
    <Link href={href} passHref>
      <MuiLink underline="hover" color="inherit">
        {children}
      </MuiLink>
    </Link>
  );
};
