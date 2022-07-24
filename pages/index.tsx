import type { NextPage } from "next";
import { Box, Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { trig0 } from "../src/data/trigonometry/0-basics";
import { shuffle } from "../src/shuffle";
import { Question } from "../src/model/Question";
const GameController = dynamic(
  () => import("../src/controller/GameController"),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Math Games
        </Typography>
        <GameController
          questions={shuffle<Question>(trig0)}
          startingLives={3}
          timeoutSeconds={5}
        />
      </Box>
    </Container>
  );
};

export default Home;
