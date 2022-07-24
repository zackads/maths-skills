import type { NextPage } from "next";
import {
  Box,
  Button,
  Container,
  FormGroup,
  Slider,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {
  const [timeout, setTimeout] = useState(10);
  const [lives, setLives] = useState(3);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Trigonometry
        </Typography>
        <p>Evaluate the expressions shown as quickly as you can</p>
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
        <Link href={`0/play?timeout=${timeout}&lives=${lives}`}>
          <Button autoFocus fullWidth variant={"contained"}>
            Start now
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
