import { assign, createMachine } from "xstate";
import { Attempt, Question } from "./Question";
import { loadNextQuestion } from "./actions/loadNextQuestion";
import { decrementLives } from "./actions/decrementLives";
import { Submit } from "./events/Submit";
import { Continue } from "./events/Continue";
import { Input } from "./events/Input";
import { clearInput } from "./actions/clearInput";
import { archiveCurrentQuestion } from "./actions/archiveCurrentQuestion";
import { choose } from "xstate/es/actions";

export interface GameContext {
  playerAnswer: string;
  currentQuestion: Question;
  attemptedQuestions: Attempt[];
  remainingQuestions: Question[];
  livesRemaining: number;
}

export type GameEvent = Input | Submit | Continue;

export type TGameStates =
  | {
      value: "intro";
      context: GameContext;
    }
  | {
      value: "attempting";
      context: GameContext;
    }
  | {
      value: "feedback";
      context: GameContext;
    }
  | {
      value: "over";
      context: GameContext;
    };

export interface GameConfig {
  questions: Question[];
  questionTimeoutSeconds: number;
  feedbackTimeoutSeconds: number;
  startingLives: number;
}

export const createGameMachine = (config: GameConfig) => {
  return createMachine<GameContext, GameEvent, TGameStates>(
    {
      id: "game",
      context: {
        currentQuestion: config.questions[0],
        playerAnswer: "",
        remainingQuestions: config.questions.slice(1),
        livesRemaining: config.startingLives,
        attemptedQuestions: [],
      },
      initial: "intro",
      states: {
        intro: {
          on: {
            CONTINUE: [{ target: "attempting" }],
          },
        },
        attempting: {
          after: {
            [config.questionTimeoutSeconds * 1000]: {
              target: "feedback",
            },
          },
          on: {
            INPUT: {
              actions: assign({
                playerAnswer: (context, event) => event.text,
              }),
            },
            SUBMIT: {
              target: "feedback",
            },
          },
        },
        feedback: {
          entry: choose([
            {
              cond: (context) =>
                !context.currentQuestion.acceptedAnswers.includes(
                  context.playerAnswer
                ),
              actions: ["decrementLives"],
            },
          ]),
          after: {
            [config.feedbackTimeoutSeconds * 1000]: [
              {
                cond: (context) => context.livesRemaining === 0,
                target: "over",
                actions: ["archiveCurrentQuestion"],
              },
              {
                cond: (context) => context.remainingQuestions.length === 0,
                target: "over",
                actions: ["archiveCurrentQuestion"],
              },
              {
                target: "attempting",
                actions: ["archiveCurrentQuestion", "loadNextQuestion"],
              },
            ],
          },
          on: {
            CONTINUE: [
              {
                cond: (context) => context.livesRemaining === 0,
                target: "over",
                actions: ["archiveCurrentQuestion"],
              },
              {
                cond: (context) => context.remainingQuestions.length === 0,
                target: "over",
                actions: ["archiveCurrentQuestion"],
              },
              {
                target: "attempting",
                actions: ["archiveCurrentQuestion", "loadNextQuestion"],
              },
            ],
          },
        },
        over: {
          type: "final",
        },
      },
    },
    {
      actions: {
        loadNextQuestion,
        archiveCurrentQuestion,
        decrementLives,
        clearInput,
      },
    }
  );
};
