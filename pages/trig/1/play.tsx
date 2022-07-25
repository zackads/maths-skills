import type { NextPage } from "next";
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
import { shuffle } from "../../../src/shuffle";
import { Question } from "../../../src/model/Question";
import { useRouter } from "next/router";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import unitCircle from "../../../public/unit_circle.svg";
import { useRef } from "react";
import { trig1 } from "../../../src/data/evaluating-trigonometric-expressions/1-cosine";
const GameController = dynamic(
  () => import("../../../src/controller/GameController"),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  const router = useRouter();
  const { lives = "3", timeout = "10" } = router.query;

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Trigonometry
        </Typography>
        <GameController
          config={{
            questions: shuffle<Question>(trig1),
            startingLives: Number(lives),
            timeoutSeconds: Number(timeout),
          }}
          mentalRepresentation={<UnitCircleAccordion />}
        />
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

export default Home;
