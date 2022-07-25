import { Stack } from "@mui/material";

import { useMachine } from "@xstate/react";
import { createGameMachine, GameConfig } from "../model/GameMachine";
import { ScoreCard } from "../components/ScoreCard";
import { AttemptingView } from "../components/AttemptingView";
import { FeedbackView } from "../components/FeedbackView";
import React from "react";

const GameController = ({
  config,
  mentalRepresentation,
}: {
  config: GameConfig;
  mentalRepresentation: React.ReactElement;
}) => {
  const [game, sendToGame] = useMachine(createGameMachine(config));

  switch (game.value) {
    case "attempting":
      return (
        <>
          <AttemptingView
            timeoutSeconds={config.timeoutSeconds}
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
          mentalRepresentation={mentalRepresentation}
          onContinue={() => sendToGame({ type: "CONTINUE" })}
        />
      );
    case "over":
      return (
        <Stack spacing={2}>
          <h2>Game over</h2>
          <ScoreCard
            timeout={config.timeoutSeconds}
            attempts={game.context.previouslyAttempted}
            missed={game.context.remainingQuestions}
          />
        </Stack>
      );
    default:
      return <p>Uh oh</p>;
  }
};

export const delimit = (asciimath: string) => "`" + asciimath + "`";

export default GameController;
