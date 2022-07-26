import { Stack } from "@mui/material";

import { useMachine } from "@xstate/react";
import { createGameMachine } from "../model/GameMachine";
import { ScoreCard } from "../components/ScoreCard";
import { AttemptingView } from "../components/AttemptingView";
import { FeedbackView } from "../components/FeedbackView";
import React from "react";
import { MentalRepresentations } from "../components/MentalRepresentations";
import { shuffle } from "../shuffle";
import { Skill } from "../model/Skill";

const GameController = ({
  skill,
  timeoutSeconds,
  startingLives,
}: {
  skill: Skill;
  timeoutSeconds: number;
  startingLives: number;
}) => {
  const [game, sendToGame] = useMachine(
    createGameMachine(shuffle(skill.questions), timeoutSeconds, startingLives)
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
        >
          <MentalRepresentations skill={skill} />
        </FeedbackView>
      );
    case "over":
      return (
        <Stack spacing={2}>
          <h2>Game over</h2>
          <ScoreCard
            timeout={timeoutSeconds}
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
