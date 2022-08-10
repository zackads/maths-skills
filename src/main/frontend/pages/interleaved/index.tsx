import type { GetStaticProps, InferGetStaticPropsType } from "next";
import {
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { getAllSkills } from "../../src/data/getAllSkills";
import { Skill } from "../../src/model/Skill";
import dynamic from "next/dynamic";
import { StyledLink } from "../../src/components/StyledLink";
const GameController = dynamic(
  () => import("../../src/controller/GameController"),
  {
    ssr: false,
  }
);

interface Preferences {
  skills: Skill[];
  totalQuestions: number;
  timeout: number;
  lives: number;
}

const InterleavedPractice = ({
  skills,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [playing, setPlaying] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>({
    skills: [],
    totalQuestions: 20,
    timeout: 10,
    lives: 3,
  });

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    const checkbox = event.target;

    console.log(skills);
    console.log(checkbox.id);
    console.log(skills.find((skill: Skill) => skill.id === checkbox.id));

    if (checkbox.checked) {
      setPreferences({
        ...preferences,
        skills: [
          ...preferences.skills,
          skills.find((skill: Skill) => skill.id === checkbox.id),
        ],
      });
    } else {
      setPreferences({
        ...preferences,
        skills: preferences.skills.filter(
          (selected) => selected.id !== checkbox.id
        ),
      });
    }
    console.log(preferences);
  };

  const isSelected = (skillId: string) => {
    return preferences.skills.map((skill) => skill.id).includes(skillId);
  };

  switch (playing) {
    case false:
      return (
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Stack spacing={2}>
              <Breadcrumbs aria-label="breadcrumb">
                <StyledLink href={"/"}>Home</StyledLink>
                <Typography color="text.primary">
                  Interleaved practice
                </Typography>
              </Breadcrumbs>
              <Typography variant="h4" component="h1" gutterBottom>
                Interleaved practice
              </Typography>
              <Typography>
                Create a custom practice session that interleaves questions from
                two or more skills.
              </Typography>
              <form onSubmit={() => setPlaying(true)}>
                <Stack spacing={2}>
                  <Typography variant={"h5"} component={"h2"}>
                    Skills
                  </Typography>
                  <FormGroup>
                    {skills.map((skill: Skill, index: number) => {
                      return (
                        <FormControlLabel
                          key={index}
                          label={skill.title}
                          control={
                            <Checkbox
                              id={skill.id}
                              checked={isSelected(skill.id)}
                              onChange={handleCheck}
                            />
                          }
                        />
                      );
                    })}
                  </FormGroup>
                  <Typography gutterBottom>
                    Total number of questions
                  </Typography>
                  <Slider
                    value={preferences.totalQuestions}
                    step={1}
                    marks
                    min={5}
                    max={30}
                    valueLabelDisplay="on"
                    size={"small"}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        totalQuestions: Number(
                          (e.target as HTMLInputElement).value
                        ),
                      })
                    }
                  />
                  <Typography gutterBottom>Seconds per question</Typography>
                  <Slider
                    value={preferences.timeout}
                    step={1}
                    marks
                    min={1}
                    max={15}
                    valueLabelDisplay="on"
                    size={"small"}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        timeout: Number((e.target as HTMLInputElement).value),
                      })
                    }
                  />
                  <Typography gutterBottom>Lives</Typography>
                  <Slider
                    value={preferences.lives}
                    step={1}
                    marks
                    min={1}
                    max={5}
                    valueLabelDisplay="on"
                    size={"small"}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        lives: Number((e.target as HTMLInputElement).value),
                      })
                    }
                    tabIndex={2}
                  />

                  <p>Ready?</p>
                  <Button
                    type="submit"
                    fullWidth
                    variant={"contained"}
                    tabIndex={3}
                  >
                    Start now
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Container>
      );
    case true:
      return (
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Stack spacing={2}>
              <Breadcrumbs aria-label="breadcrumb">
                <StyledLink href={"/"}>Home</StyledLink>
                <Typography color="text.primary">
                  Interleaved practice
                </Typography>
              </Breadcrumbs>
              <Typography variant="h4" component="h1" gutterBottom>
                Interleaved practice
              </Typography>
              <GameController
                skills={preferences.skills}
                totalQuestions={preferences.totalQuestions}
                startingLives={preferences.lives}
                timeoutSeconds={preferences.timeout}
              />
            </Stack>
          </Box>
        </Container>
      );
  }
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      skills: getAllSkills(),
    },
  };
};

export default InterleavedPractice;
