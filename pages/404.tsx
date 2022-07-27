import type { NextPage } from "next";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const Custom404: NextPage = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h4" component="h1">
        Precurs.io
      </Typography>
      <Typography variant="body1">The page was not found.</Typography>
      <Button href={"/"}>Back to home</Button>
    </Stack>
  );
};

export default Custom404;
