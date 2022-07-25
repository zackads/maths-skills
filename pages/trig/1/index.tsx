import type { NextPage } from "next";
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
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import unitCircle from "../../../public/unit_circle.svg";
import { NavCrumbs } from "../../../src/components/NavCrumbs";

const Home: NextPage = () => {
  const [timeout, setTimeout] = useState(10);
  const [lives, setLives] = useState(3);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Stack spacing={2}>
          <NavCrumbs
            path={[{ Home: "/" }, { Trigonometry: "/trig" }]}
            current="Level 1: Cosine"
          />
          <Typography variant="h4" component="h1" gutterBottom>
            The cosine function
          </Typography>
          <Typography variant="body1">
            {
              "Alright!  Now you've mastered the sine function, let's do the same for the cosine function."
            }
          </Typography>
          <Typography variant="body1">
            {
              "Remember to walk the unit circle in your head while evaluating the functions."
            }
          </Typography>
          <Image src={unitCircle} alt="Unit circle" />
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
            />
          </FormGroup>
          <p>Ready?</p>
          <Link href={`1/play?timeout=${timeout}&lives=${lives}`}>
            <Button fullWidth variant={"contained"}>
              Start now
            </Button>
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
