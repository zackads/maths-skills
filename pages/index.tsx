import type { NextPage } from 'next'
import {Box, Container, Typography} from "@mui/material";
import dynamic from "next/dynamic";
const GameController = dynamic(() => import("../src/controller/GameController"), {
    ssr: false,
});

const Home: NextPage = () => {
  return (
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Math Games
            </Typography>
            <GameController
                questionTimeoutSeconds={5}
                feedbackTimeoutSeconds={3}
            />
          </Box>
        </Container>
  )
}

export default Home
