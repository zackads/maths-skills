import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import Skills from "../src/data/skills.json";
import { SkillsGraph } from "../src/components/SkillsGraph/SkillsGraph";
import { Skill } from "../src/model/Skill";
import { useEffect, useRef, useState } from "react";

const Home: NextPage<{ skills: Skill[] }> = ({ skills }) => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeight(ref.current!.clientHeight);
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <div ref={ref}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.primary">Home</Typography>
          </Breadcrumbs>
          <Typography variant="h4" component="h1" gutterBottom>
            Precurs.io
          </Typography>
          <Typography variant="body1" gutterBottom>
            The deliberate practice platform for mathematics.
          </Typography>
        </div>
        <div style={{ height: `calc(100vh - ${height}px - 50px)` }}>
          <SkillsGraph skills={skills} />
        </div>
      </Box>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { skills: Skills } };
};

export default Home;
