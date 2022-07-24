import { QuestionCard } from "./QuestionCard";
import { AttemptCard } from "./AttemptCard";
import { Alert, Button, Stack, Typography } from "@mui/material";
import { CountdownTimer } from "./CountdownTimer";
import { MathJax } from "better-react-mathjax";
import { delimit } from "../controller/GameController";
import { Attempt, isCorrect } from "../model/Question";

interface FeedbackViewProps {
  attempt: Attempt;
  timeoutSeconds: number;
  livesRemaining: number;
  onContinue: () => void;
}

export const FeedbackView = ({
  attempt,
  timeoutSeconds,
  livesRemaining,
  onContinue,
}: FeedbackViewProps) => {
  return (
    <Stack spacing={2} alignContent={"center"}>
      <QuestionCard>{attempt.question.text}</QuestionCard>
      <AttemptCard>{delimit(attempt.playerAnswer)}</AttemptCard>
      {isCorrect(attempt) ? (
        <Alert severity="success">Woohoo good job!</Alert>
      ) : (
        <Alert severity="error">
          <MathJax>
            {"The correct answer was " +
              delimit(attempt.question.acceptedAnswers[0])}
          </MathJax>
        </Alert>
      )}
      <CountdownTimer seconds={timeoutSeconds} />
      <Button autoFocus variant={"contained"} onClick={onContinue}>
        Continue
      </Button>
      <Typography align={"center"}>
        Lives remaining: <b>{livesRemaining}</b>
      </Typography>
    </Stack>
  );
};
