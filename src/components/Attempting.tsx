import { Button, Stack, TextField } from "@mui/material";
import { QuestionCard } from "./QuestionCard";
import { AttemptCard } from "./AttemptCard";
import { MathButtons } from "./MathButtons";
import { CountdownTimer } from "./CountdownTimer";
import { delimit } from "../controller/GameController";
import { useRef, useState } from "react";

interface AttemptingProps {
  children: string;
  timeoutSeconds: number;
  onInput: (input: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

export const Attempting = ({
  children,
  timeoutSeconds,
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
          />

          <MathButtons inputRef={inputRef} />
          <Button onClick={onClear}>Clear</Button>
          <CountdownTimer seconds={timeoutSeconds} />
          <Button type="submit" variant="contained" fullWidth>
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
