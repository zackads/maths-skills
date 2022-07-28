import React from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { NavCrumbs } from "./NavCrumbs";
import { MenuDrawer } from "./MenuDrawer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppBar component="nav" position="static">
        <Container>
          <Toolbar>
            <MenuDrawer />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Maths Skills
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Box component="main" sx={{ p: 3 }}>
          <NavCrumbs />
          {children}
        </Box>
      </Container>
    </>
  );
};
