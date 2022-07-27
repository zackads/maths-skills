import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import React from "react";

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
