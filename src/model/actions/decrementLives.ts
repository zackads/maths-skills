import { assign } from "xstate";
import { GameContext, GameEvent } from "../GameMachine";

export const decrementLives = assign<GameContext, GameEvent>({
  livesRemaining: (context, _) => context.livesRemaining - 1,
});
