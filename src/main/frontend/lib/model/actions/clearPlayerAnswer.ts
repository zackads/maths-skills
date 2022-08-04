import { assign } from "xstate";
import { GameContext, GameEvent } from "../GameMachine";

export const clearPlayerAnswer = assign<GameContext, GameEvent>({
  currentlyAttempting: (context) => ({
    ...context.currentlyAttempting,
    playerAnswer: "",
  }),
});
