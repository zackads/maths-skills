import { assign } from "xstate";
import { GameContext, GameEvent } from "../GameMachine";
import { createBlankAttempt } from "../Attempt";

export const loadNextQuestion = assign<GameContext, GameEvent>({
  currentlyAttempting: (context, _) =>
    createBlankAttempt(context.remainingQuestions[0]),
  remainingQuestions: (context, _) => context.remainingQuestions.slice(1),
});
