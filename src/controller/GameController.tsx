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
import { Question } from "../model/Question";

const getSkillByQuestion = (skills: Skill[], question: Question) => {
  return skills.find((skill) =>
    skill.questions.map((q) => q.text).includes(question.text)
  );
};

const GameController = ({
  skills,
  totalQuestions,
  timeoutSeconds,
  startingLives,
}: {
  skills: Skill[];
  timeoutSeconds: number;
  startingLives: number;
  totalQuestions?: number;
}) => {
  const allQuestions = shuffle(skills.map((skill) => skill.questions).flat());
  const questionsToPractise = allQuestions.slice(
    0,
    totalQuestions || allQuestions.length
  );

  const [game, sendToGame] = useMachine(
    createGameMachine(questionsToPractise, timeoutSeconds, startingLives)
  );
  const currentSkill = getSkillByQuestion(
    skills,
    game.context.currentlyAttempting.question
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
          {currentSkill && <MentalRepresentations skill={currentSkill} />}
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
