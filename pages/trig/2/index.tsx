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
import { MathJax } from "better-react-mathjax";

const Home: NextPage = () => {
  const [timeout, setTimeout] = useState(10);
  const [lives, setLives] = useState(3);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Stack spacing={2}>
          <NavCrumbs
            path={[{ Home: "/" }, { Trigonometry: "/trig" }]}
            current="Level 2: Sine and cosine"
          />
          <MathJax>
            <Typography variant="h4" component="h1" gutterBottom>
              The sine function
            </Typography>
            <Typography variant="body1">
              {
                "Good job.  Now let's mix the sine and cosine functions together in some interleaved practice."
              }
            </Typography>
            <Typography variant="body1">
              {
                "Remember to walk the unit circle in your head while evaluating the functions."
              }
            </Typography>
          </MathJax>
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
          <Link href={`2/play?timeout=${timeout}&lives=${lives}`}>
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
