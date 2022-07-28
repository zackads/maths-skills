import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavCrumbs } from "./NavCrumbs";
import MenuIcon from "@mui/icons-material/menu";
import BlenderIcon from "@mui/icons-material/Blender";
import TodayIcon from "@mui/icons-material/Today";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export const MenuDrawer = () => {
  const [open, setOpen] = useState(false);

  const PageList = () => {
    return (
      <Box role="presentation" width={250} onClick={() => setOpen(!open)}>
        <List>
          <ListItem disablePadding disabled>
            <ListItemButton>
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary={"Today's practice"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BlenderIcon />
              </ListItemIcon>
              <ListItemText primary={"Custom session"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding disabled>
            <ListItemButton>
              <ListItemIcon>
                <FitnessCenterIcon />
              </ListItemIcon>
              <ListItemText primary={"Mistakes review"} />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Box>
    );
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <PageList />
      </Drawer>
    </>
  );
};

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
            <Button color="inherit">Login</Button>
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
