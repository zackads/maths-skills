import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Skills from "../src/data/skills.json";
import { SkillsGraph } from "../src/components/SkillsGraph/SkillsGraph";
import { Skill } from "../src/model/Skill";
import { Typography } from "@mui/material";
import React from "react";

const Home: NextPage<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <div style={{ height: `60vh` }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Precurs.io
      </Typography>
      <Typography variant="body1" gutterBottom>
        The deliberate practice platform for mathematics.
      </Typography>
      <SkillsGraph skills={skills} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { skills: Skills } };
};

export default Home;
