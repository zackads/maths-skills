import { Stack } from "@mui/material";

import { useMachine } from "@xstate/react";
import { createGameMachine, GameConfig } from "../model/GameMachine";
import { ScoreCard } from "../components/ScoreCard";
import { IntroView } from "../components/IntroView";
import { AttemptingView } from "../components/AttemptingView";
import { FeedbackView } from "../components/FeedbackView";

const GameController = ({
  questions,
  questionTimeoutSeconds,
  feedbackTimeoutSeconds,
  startingLives,
}: GameConfig) => {
  const [game, sendToGame] = useMachine(
    createGameMachine({
      questions,
      startingLives,
      questionTimeoutSeconds,
      feedbackTimeoutSeconds,
    })
  );

  switch (game.value) {
    case "intro":
      return <IntroView onContinue={() => sendToGame({ type: "CONTINUE" })} />;
    case "attempting":
      return (
        <AttemptingView
          timeoutSeconds={questionTimeoutSeconds}
          onInput={(input) => sendToGame({ type: "INPUT", text: input })}
          onSubmit={() => sendToGame({ type: "SUBMIT" })}
          onClear={() => sendToGame({ type: "INPUT", text: "" })}
        >
          {game.context.currentlyAttempting.question.text}
        </AttemptingView>
      );
    case "feedback":
      return (
        <FeedbackView
          attempt={game.context.currentlyAttempting}
          timeoutSeconds={feedbackTimeoutSeconds}
          onContinue={() => sendToGame({ type: "CONTINUE" })}
        />
      );
    case "over":
      return (
        <Stack spacing={2}>
          <h2>Game over</h2>
          <ScoreCard attempts={game.context.previouslyAttempted} />
        </Stack>
      );
    default:
      return <p>Uh oh</p>;
  }
};

export const delimit = (asciimath: string) => "`" + asciimath + "`";

export default GameController;
