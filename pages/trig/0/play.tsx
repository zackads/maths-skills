import type { NextPage } from "next";
import { Box, Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { trig0 } from "../../../src/data/trigonometry/0-basics";
import { shuffle } from "../../../src/shuffle";
import { Question } from "../../../src/model/Question";
import { useRouter } from "next/router";
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
          questions={shuffle<Question>(trig0)}
          startingLives={Number(lives)}
          questionTimeoutSeconds={Number(timeout)}
          feedbackTimeoutSeconds={3}
        />
      </Box>
    </Container>
  );
};

export default Home;
