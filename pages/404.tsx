import type { NextPage } from "next";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledLink } from "../src/components/SkillNavCrumbs";

const Custom404: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <StyledLink href={"/"}>Home</StyledLink>
        </Breadcrumbs>
        <Typography variant="h4" component="h1">
          Precurs.io
        </Typography>
        <Stack spacing={2}>
          <Typography variant="body1">The page was not found.</Typography>
          <Button href={"/"}>Back to home</Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Custom404;
