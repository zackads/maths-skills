import { Alert, Button, Stack, TextField } from "@mui/material";
import { useRef } from "react";
import { MathJax } from "better-react-mathjax";

import { useMachine } from "@xstate/react";
import { createGameMachine } from "../model/GameMachine";
import { trig0 } from "../data/trigonometry/0-basics";
import { QuestionCard } from "../view/QuestionCard";
import { AttemptCard } from "../view/AttemptCard";
import { MathButtons } from "../view/MathButtons";
import { CountdownTimer } from "../view/CountdownTimer";
import { ScoreCard } from "../view/ScoreCard";
import { Intro } from "../view/Intro";

const GameController = ({
  questionTimeoutSeconds,
  feedbackTimeoutSeconds,
}: {
  questionTimeoutSeconds: number;
  feedbackTimeoutSeconds: number;
}) => {
  const [game, sendToGame] = useMachine(
    createGameMachine(trig0, questionTimeoutSeconds, feedbackTimeoutSeconds)
  );

  const inputRef = useRef<HTMLInputElement>(null);

  switch (game.value) {
    case "intro":
      return <Intro onContinue={() => sendToGame({ type: "CONTINUE" })} />;
    case "attempting":
      return (
        <>
          <Stack spacing={2}>
            <QuestionCard>{game.context.currentQuestion.text}</QuestionCard>
            <AttemptCard>{delimit(game.context.playerAnswer)}</AttemptCard>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendToGame({ type: "SUBMIT" });
              }}
            >
              <Stack spacing={2}>
                <TextField
                  id="answer"
                  inputRef={inputRef}
                  fullWidth={true}
                  value={game.context.playerAnswer}
                  onChange={(e) =>
                    sendToGame({ type: "INPUT", text: e.target.value })
                  }
                  autoFocus
                  autoComplete="off"
                />

                <MathButtons inputRef={inputRef} />
                <Button onClick={() => sendToGame({ type: "INPUT", text: "" })}>
                  Clear
                </Button>
                <CountdownTimer seconds={questionTimeoutSeconds} />
                <Button type="submit" variant="contained" fullWidth>
                  Submit
                </Button>
              </Stack>
            </form>
          </Stack>
        </>
      );
    case "feedback":
      return (
        <>
          <Stack spacing={2} alignContent={"center"}>
            <QuestionCard>{game.context.currentQuestion.text}</QuestionCard>
            <AttemptCard>{delimit(game.context.playerAnswer)}</AttemptCard>
            {game.context.currentQuestion.acceptedAnswers.includes(
              game.context.playerAnswer
            ) ? (
              <>
                <Alert severity="success">Woohoo good job!</Alert>
                <CountdownTimer seconds={feedbackTimeoutSeconds} />
              </>
            ) : (
              <>
                {" "}
                <Alert severity="error">
                  <MathJax>
                    {"The correct answer was " +
                      delimit(game.context.currentQuestion.acceptedAnswers[0])}
                  </MathJax>
                </Alert>
                <CountdownTimer seconds={feedbackTimeoutSeconds} />
              </>
            )}
            <Button
              autoFocus
              variant={"contained"}
              onClick={() => sendToGame({ type: "CONTINUE" })}
            >
              Continue
            </Button>
          </Stack>
        </>
      );
    case "over":
      return (
        <>
          <Stack spacing={2}>
            <h2>Game over</h2>
            <ScoreCard attempts={game.context.attemptedQuestions} />
          </Stack>
        </>
      );
    default:
      return <p>Uh oh</p>;
  }
};

export const delimit = (asciimath: string) => "`" + asciimath + "`";

export default GameController;