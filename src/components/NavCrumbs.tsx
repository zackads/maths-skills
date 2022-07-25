import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

type NavLink = { [key: string]: string };

export const NavCrumbs = ({
  path,
  current,
}: {
  path: NavLink[];
  current: string;
}) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {path.map((location, index) => {
        const [name, href] = Object.entries(location)[0];

        return (
          <StyledLink key={index} href={href}>
            {name}
          </StyledLink>
        );
      })}
      <Typography color="text.primary">{current}</Typography>
    </Breadcrumbs>
  );
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
