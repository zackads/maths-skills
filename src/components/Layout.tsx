import React from "react";
import { Box, Container } from "@mui/material";
import { NavCrumbs } from "./NavCrumbs";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <NavCrumbs />
        {children}
      </Box>
    </Container>
  );
};
