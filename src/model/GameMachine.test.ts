/**
 * These are end-to-end logic tests, not unit tests.
 *
 * A single journey through a game is tested, so state is built up and shared between tests.
 */
import { createGameMachine, GameConfig } from "./GameMachine";
import { interpret } from "xstate";
import { createBlankAttempt, isCorrect } from "./Question";

describe("GameMachine", () => {
  const config: GameConfig = {
    questions: [
      {
        text: "Evaluate `sin(pi/6`)",
        acceptedAnswers: ["1/2"],
      },
      {
        text: "Evaluate `cos(pi/6`)",
        acceptedAnswers: ["sqrt3/2"],
      },
    ],
    timeoutSeconds: 0,
    startingLives: 3,
  };

  it("Gets the first question correct and the second question incorrect", () => {
    const game = interpret(createGameMachine(config));

    game.start();
    expect(game.state.value).toEqual("intro");
    expect(game.state.context.livesRemaining).toEqual(3);
    expect(game.state.context.previouslyAttempted).toHaveLength(0);
    expect(game.state.context.currentlyAttempting).toMatchObject(
      createBlankAttempt(config.questions[0])
    );
    expect(game.state.context.remainingQuestions).toHaveLength(1);

    game.send({ type: "CONTINUE" });
    expect(game.state.value).toEqual("attempting");
    expect(game.state.context.currentlyAttempting).toMatchObject(
      createBlankAttempt(config.questions[0])
    );

    const correctAnswer = config.questions[0].acceptedAnswers[0];
    game.send({ type: "INPUT", text: correctAnswer });
    game.send({ type: "CONTINUE" });
    expect(game.state.value).toEqual("feedback");

    game.send({ type: "CONTINUE" });
    expect(game.state.context.previouslyAttempted).toHaveLength(1);
    expect(game.state.context.currentlyAttempting).toMatchObject(
      createBlankAttempt(config.questions[1])
    );
    expect(game.state.context.remainingQuestions).toHaveLength(0);
    expect(
      game.state.context.previouslyAttempted.slice(-1)[0].playerAnswer
    ).toBe(correctAnswer);
    expect(
      isCorrect(game.state.context.previouslyAttempted.slice(-1)[0])
    ).toBeTruthy();
    expect(game.state.context.currentlyAttempting).toMatchObject(
      createBlankAttempt(config.questions[1])
    );
    expect(game.state.value).toEqual("attempting");

    const incorrectAnswer = "total gobbledegook";
    game.send({ type: "INPUT", text: incorrectAnswer });
    game.send({ type: "CONTINUE" });
    expect(game.state.context.livesRemaining).toBe(2);

    game.send({ type: "CONTINUE" });
    expect(game.state.value).toEqual("over");
    expect(game.state.context.previouslyAttempted).toHaveLength(2);
    expect(game.state.context.previouslyAttempted[0].playerAnswer).toBe(
      correctAnswer
    );
    expect(game.state.context.previouslyAttempted[1].playerAnswer).toBe(
      incorrectAnswer
    );
  });
});
