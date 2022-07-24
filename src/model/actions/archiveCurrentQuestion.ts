import { assign } from "xstate";
import { GameContext, GameEvent } from "../GameMachine";

export const archiveCurrentQuestion = assign<GameContext, GameEvent>({
  previouslyAttempted: (context, _) => [
    ...context.previouslyAttempted,
    context.currentlyAttempting,
  ],
});
