import type { NextPage } from "next";
import { Box, Container, Stack, Typography } from "@mui/material";
import { NavCrumbs } from "../../src/components/NavCrumbs";

const Trigonometry: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Stack spacing={2}>
          <NavCrumbs path={[{ Home: "/" }]} current="Trigonometry" />
          <Typography variant="h4" component="h1" gutterBottom>
            Trigonometry
          </Typography>
          <Typography variant="body1">{"Trigonometry is cool."}</Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default Trigonometry;
