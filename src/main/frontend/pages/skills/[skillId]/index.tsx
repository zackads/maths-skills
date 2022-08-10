import type { GetStaticProps, InferGetStaticPropsType } from "next";
import {
  Button,
  Divider,
  FormGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { Skill } from "../../../src/model/Skill";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { useState } from "react";
import { MentalRepresentations } from "../../../src/components/MentalRepresentations";
import { getSkillById } from "../../../src/data/getSkillById";
import { getAllSkills } from "../../../src/data/getAllSkills";
import { MathJax } from "better-react-mathjax";

const SkillHome = ({
  skill,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [timeout, setTimeout] = useState(10);
  const [lives, setLives] = useState(3);

  return (
    <MathJax dynamic>
      <Stack spacing={2}>
        <Typography variant="h4" component="h1" gutterBottom>
          {skill.title}
        </Typography>
        <Typography>{skill.description}</Typography>
        {skill.mentalRepresentations.length > 0 && (
          <>
            <Typography variant="h5" component="h2">
              Mental representations
            </Typography>
            <Typography>
              While practising this skill, deliberately try and hold these
              mental representations in your head as you think about each
              question.{" "}
            </Typography>
            <Typography>
              If you get a question wrong, re-visit and update your mental
              representation.
            </Typography>
            <MentalRepresentations skill={skill} />
          </>
        )}
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
          href={`/skills/${skill.id}/practise?timeout=${timeout}&lives=${lives}`}
        >
          <Button fullWidth variant={"contained"} tabIndex={3}>
            Start now
          </Button>
        </Link>
      </Stack>
    </MathJax>
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
      skill: getSkillById(params!.skillId),
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: getAllSkills().map((skill) => ({ params: { skillId: skill.id } })),
    fallback: false,
  };
}

export default SkillHome;
