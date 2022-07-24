import { Stack } from "@mui/material";

import { useMachine } from "@xstate/react";
import { createGameMachine, GameConfig } from "../model/GameMachine";
import { ScoreCard } from "../components/ScoreCard";
import { AttemptingView } from "../components/AttemptingView";
import { FeedbackView } from "../components/FeedbackView";

const GameController = ({
  questions,
  timeoutSeconds,
  startingLives,
}: GameConfig) => {
  const [game, sendToGame] = useMachine(
    createGameMachine({
      questions,
      startingLives,
      timeoutSeconds,
    })
  );

  switch (game.value) {
    case "attempting":
      return (
        <>
          <AttemptingView
            timeoutSeconds={timeoutSeconds}
            livesRemaining={game.context.livesRemaining}
            onInput={(input) => sendToGame({ type: "INPUT", text: input })}
            onSubmit={() => sendToGame({ type: "CONTINUE" })}
            onClear={() => sendToGame({ type: "INPUT", text: "" })}
          >
            {game.context.currentlyAttempting.question.text}
          </AttemptingView>
        </>
      );
    case "feedback":
      return (
        <FeedbackView
          attempt={game.context.currentlyAttempting}
          livesRemaining={game.context.livesRemaining}
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
