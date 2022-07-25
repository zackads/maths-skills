import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { Box, Breadcrumbs, Container, Stack, Typography } from "@mui/material";
import Skills from "../src/data/skills.json";
import { SkillsGraph } from "../src/components/SkillsGraph/SkillsGraph";
import { Skill } from "../src/model/Skill";

const Home: NextPage<{ skills: Skill[] }> = ({ skills }) => {
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
          <Typography variant="body1">
            The deliberate practice platform for mathematics.
          </Typography>
          <div style={{ height: 800 }}>
            <SkillsGraph skills={skills} />
          </div>
        </Stack>
      </Box>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { skills: Skills } };
};

export default Home;
