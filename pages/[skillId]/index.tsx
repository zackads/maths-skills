import type { GetStaticProps, InferGetStaticPropsType } from "next";
import {
  Box,
  Button,
  Container,
  Divider,
  FormGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { NavCrumbs } from "../../src/components/NavCrumbs";
import skills from "../../src/data/skills.json";
import { Skill } from "../../src/model/Skill";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { useState } from "react";

const SkillHome = ({
  skill,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [timeout, setTimeout] = useState(10);
  const [lives, setLives] = useState(3);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Stack spacing={2}>
          <NavCrumbs path={[{ Home: "/" }]} current={skill.title} />
          <Typography variant="h4" component="h1" gutterBottom>
            {skill.title}
          </Typography>
          <Typography variant="body1">
            {skill.mental_representations}
          </Typography>
          <Typography variant="body1">{skill.prereqs}</Typography>
          <Divider />
          <FormGroup>
            <Typography gutterBottom>Seconds per question</Typography>
            <Slider
              value={timeout}
              step={1}
              marks
              min={1}
              max={15}
              valueLabelDisplay="on"
              size={"small"}
              onChange={(e) =>
                setTimeout(Number((e.target as HTMLInputElement).value))
              }
              tabIndex={1}
            />
            <Typography gutterBottom>Lives</Typography>
            <Slider
              value={lives}
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="on"
              size={"small"}
              onChange={(e) =>
                setLives(Number((e.target as HTMLInputElement).value))
              }
              tabIndex={2}
            />
          </FormGroup>
          <p>Ready?</p>
          <Link
            href={`/${skill.id}/practise?timeout=${timeout}&lives=${lives}`}
          >
            <Button fullWidth variant={"contained"} tabIndex={3}>
              Start now
            </Button>
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};

type Props = {
  skill: Skill;
};

interface Params extends ParsedUrlQuery {
  skillId: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  return {
    props: {
      skill: skills.find((skill) => skill.id === params!.skillId) as Skill,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: skills.map((skill) => ({ params: { skillId: skill.id } })),
    fallback: false,
  };
}

export default SkillHome;
