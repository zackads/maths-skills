import { assign } from "xstate";
import { GameContext, GameEvent } from "../GameMachine";

export const clearInput = assign<GameContext, GameEvent>({
  playerAnswer: "",
});
