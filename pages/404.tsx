import type { NextPage } from "next";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";

const Custom404: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">Home</Typography>
        </Breadcrumbs>
        <Typography variant="h4" component="h1">
          Precurs.io
        </Typography>
        <Stack spacing={2}>
          <Typography variant="body1">The page was not found.</Typography>
          <Button onClick={() => history.back()}>Go back</Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Custom404;
