import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { QuestionCard } from "./QuestionCard";
import { AttemptCard } from "./AttemptCard";
import { CountdownTimer } from "./CountdownTimer";
import { delimit } from "../controller/GameController";
import React, { useRef, useState } from "react";
import { MathJax } from "better-react-mathjax";

interface AttemptingProps {
  children: string;
  timeoutSeconds: number;
  livesRemaining: number;
  onInput: (input: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

export const AttemptingView = ({
  children,
  timeoutSeconds,
  livesRemaining,
  onInput,
  onSubmit,
  onClear,
}: AttemptingProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");

  return (
    <Stack spacing={2}>
      <QuestionCard>{children}</QuestionCard>
      <AttemptCard>{delimit(input)}</AttemptCard>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <Stack spacing={2}>
          <TextField
            id="answer"
            inputRef={inputRef}
            fullWidth={true}
            value={input}
            onChange={(e) => {
              onInput(e.target.value);
              setInput(e.target.value);
            }}
            autoFocus
            autoComplete="off"
            inputProps={{ inputMode: "numeric" }}
          />
          <MathJax>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button
                  sx={{ height: "100%" }}
                  variant="outlined"
                  onClick={() => {
                    onInput(input + "pi");
                    setInput(input + "pi");
                    inputRef.current!.focus();
                  }}
                >
                  {"`pi`"}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{ height: "100%" }}
                  variant="outlined"
                  onClick={() => {
                    onInput(input + "/");
                    setInput(input + "/");
                    inputRef.current!.focus();
                  }}
                >
                  {"`□/□`"}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{ height: "100%" }}
                  variant="outlined"
                  onClick={() => {
                    onInput("sqrt" + input);
                    setInput("sqrt" + input);
                    inputRef.current!.focus();
                  }}
                >
                  √
                </Button>
              </Grid>
            </Grid>
          </MathJax>
          <Button
            onClick={() => {
              setInput("");
              onClear();
            }}
          >
            Clear
          </Button>
          <CountdownTimer seconds={timeoutSeconds} />
          <Button type="submit" variant="contained" fullWidth>
            Submit
          </Button>
          <Typography align={"center"}>
            Lives remaining: <b>{livesRemaining}</b>
          </Typography>
        </Stack>
      </form>
    </Stack>
  );
};
