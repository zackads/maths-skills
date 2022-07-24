import { assign, createMachine, StateNode } from "xstate";
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

export interface GameStates {
  states: {
    intro: StateNode;
    attempting: StateNode;
    feedback: StateNode;
    over: StateNode;
  };
}

export const createGameMachine = (
  questions: [Question, ...Question[]],
  questionTimeoutSeconds: number,
  feedbackTimeoutSeconds: number
) => {
  return createMachine<GameContext, GameEvent, TGameStates>(
    {
      id: "game",
      context: {
        currentQuestion: questions[0],
        playerAnswer: "",
        remainingQuestions: questions.slice(1),
        livesRemaining: 3,
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
            [questionTimeoutSeconds * 1000]: {
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
                context.currentQuestion.acceptedAnswers.includes(
                  context.playerAnswer
                ),
              actions: ["decrementLives"],
            },
          ]),
          after: {
            [feedbackTimeoutSeconds * 1000]: [
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
