import React, { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import TodayIcon from "@mui/icons-material/Today";
import BlenderIcon from "@mui/icons-material/Blender";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MenuIcon from "@mui/icons-material/Menu";

export const MenuDrawer = () => {
  const { user, logOut } = { user: false, logOut: () => null };
  const [open, setOpen] = useState(false);

  const PageList = () => {
    return (
      <Box role="presentation" width={250} onClick={() => setOpen(!open)}>
        <List>
          {!user ? (
            <ListItem disablePadding>
              <ListItemButton href={"/login"}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary={"Login"} />
              </ListItemButton>
            </ListItem>
          ) : (
            <>
              <ListItem disablePadding>
                <ListItemButton href={"/profile"}>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Profile"} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={logOut}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Log out"} />
                </ListItemButton>
              </ListItem>
            </>
          )}
          <Divider />
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
