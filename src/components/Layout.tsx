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
            <Typography
              variant="h6"
              component="a"
              noWrap
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "inherit",
                textDecoration: "none",
              }}
            >
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
