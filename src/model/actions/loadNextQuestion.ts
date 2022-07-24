import { assign } from "xstate";
import { GameContext, GameEvent } from "../GameMachine";

export const loadNextQuestion = assign<GameContext, GameEvent>({
  currentQuestion: (context, _) => context.remainingQuestions[0],
  remainingQuestions: (context, _) => context.remainingQuestions.slice(1),
});
