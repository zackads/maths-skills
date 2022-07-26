import Image from "next/image";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import unitCircle from "../../public/unit_circle.svg";
import { useRef } from "react";
import { Skill } from "../../src/model/Skill";
import { ParsedUrlQuery } from "querystring";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import skills from "../../src/data/skills.json";
import questions from "../../src/data/questions.json";
import { shuffle } from "../../src/shuffle";
import { Question } from "../../src/model/Question";
const GameController = dynamic(
  () => import("../../src/controller/GameController"),
  {
    ssr: false,
  }
);

const Practise = ({
  skill,
  questions,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { lives = "3", timeout = "10" } = router.query;

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {skill.title}
        </Typography>
        {questions.length > 0 ? (
          <GameController
            config={{
              questions: shuffle<Question>(questions),
              startingLives: Number(lives),
              timeoutSeconds: Number(timeout),
            }}
            mentalRepresentation={<UnitCircleAccordion />}
          />
        ) : (
          <Typography>
            {"We didn't find any questions for this skill :-("}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

const UnitCircleAccordion = () => {
  const myRef = useRef<HTMLDivElement>(null);

  return (
    <Accordion
      onChange={() => {
        setTimeout(
          () =>
            window.scrollTo({
              behavior: "smooth",
              top: document.body.scrollHeight,
              left: 0,
            }),
          300
        );
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Take another look at the unit circle
      </AccordionSummary>
      <AccordionDetails>
        <Image src={unitCircle} alt="Unit circle" />
        <div ref={myRef} />
      </AccordionDetails>
    </Accordion>
  );
};

type Props = {
  skill: Skill;
  questions: Question[];
};

interface Params extends ParsedUrlQuery {
  skillId: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const skill = skills.find((skill) => skill.id === params!.skillId) as Skill;
  const relevantQuestions = questions.filter((question) =>
    question.required_skills.includes(skill.id)
  );

  console.log("FoundQs: ", relevantQuestions);

  return {
    props: {
      skill,
      questions: relevantQuestions,
    },
  };
};

export async function getStaticPaths() {
  console.log(skills.map((skill) => ({ params: { skillId: skill.id } })));
  return {
    paths: skills.map((skill) => ({ params: { skillId: skill.id } })),
    fallback: false,
  };
}

export default Practise;
