import { assign } from "xstate";
import { GameContext, GameEvent } from "../GameMachine";

export const archiveCurrentQuestion = assign<GameContext, GameEvent>({
  attemptedQuestions: (context, _) => {
    const attempt = {
      question: context.currentQuestion,
      answer: context.playerAnswer,
      correct: () =>
        context.currentQuestion.acceptedAnswers.includes(context.playerAnswer),
    };

    return [...context.attemptedQuestions, attempt];
  },
  playerAnswer: "",
});
