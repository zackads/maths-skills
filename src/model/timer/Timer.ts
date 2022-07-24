import { assign, createMachine, sendParent, StateNode } from "xstate";
import { GameEvent } from "../GameMachine";

export interface TimerContext {
  remainingSeconds: number;
  intervalSeconds: number;
  onTimeoutEvent: GameEvent;
}

export type TimerEvent =
  | {
      type: "TICK";
    }
  | {
      type: "WIND";
      seconds: number;
    };

type TimerStates =
  | {
      value: "wound";
      context: TimerContext;
    }
  | {
      value: "finished";
      context: TimerContext;
    };

export interface TimerStateSchema {
  states: {
    wound: StateNode;
    finished: StateNode;
  };
}

export const timerMachine = createMachine<
  TimerContext,
  TimerEvent,
  TimerStates
>({
  id: "timer",
  initial: "wound",
  context: {
    remainingSeconds: 3,
    intervalSeconds: 0.1,
    onTimeoutEvent: { type: "CONTINUE" },
  },
  states: {
    wound: {
      invoke: {
        src: (context) => async (cb) => {
          const ticks = context.remainingSeconds / context.intervalSeconds;

          for (let i = 0; i < ticks; i++) {
            cb("TICK");
            await new Promise((r) =>
              setTimeout(r, 1000 * context.intervalSeconds)
            );
          }
        },
        onDone: "finished",
      },
      on: {
        TICK: [
          {
            actions: assign({
              remainingSeconds: (context) =>
                +(context.remainingSeconds! - context.intervalSeconds).toFixed(
                  2
                ),
            }),
          },
        ],
      },
    },
    finished: {
      entry: [(context) => sendParent(context.onTimeoutEvent)],
      type: "final",
    },
  },
});
