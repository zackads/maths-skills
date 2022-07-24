import { assign, createMachine } from "xstate";
import { Attempt, isCorrect, Question } from "./Question";
import { loadNextQuestion } from "./actions/loadNextQuestion";
import { decrementLives } from "./actions/decrementLives";
import { Continue } from "./events/Continue";
import { Input } from "./events/Input";
import { clearPlayerAnswer } from "./actions/clearPlayerAnswer";
import { archiveCurrentQuestion } from "./actions/archiveCurrentQuestion";
import { choose } from "xstate/es/actions";

export interface GameContext {
  currentlyAttempting: Attempt;
  remainingQuestions: Question[];
  previouslyAttempted: Attempt[];
  livesRemaining: number;
}

export type GameEvent = Input | Continue;

export type TGameStates =
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
        currentlyAttempting: {
          question: config.questions[0],
          playerAnswer: "",
        },
        remainingQuestions: config.questions.slice(1),
        livesRemaining: config.startingLives,
        previouslyAttempted: [],
      },
      initial: "attempting",
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
                currentlyAttempting: (context, event) => ({
                  ...context.currentlyAttempting,
                  playerAnswer: event.text,
                }),
              }),
            },
            CONTINUE: {
              target: "feedback",
            },
          },
        },
        feedback: {
          entry: choose([
            {
              cond: (context) => !isCorrect(context.currentlyAttempting),
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
        clearPlayerAnswer,
      },
    }
  );
};
