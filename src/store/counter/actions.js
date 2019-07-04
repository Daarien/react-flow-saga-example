export const types = {
  INCREMENT: "counter/INCREMENT",
  INCREMENT_ASYNC: "counter/INCREMENT_ASYNC",
  DECREMENT: "counter/DECREMENT",
  RESET: "counter/RESET"
};

type ActionTypes = $Keys<typeof types>;

type IncrementAction = {
  type: ActionTypes
};

type DecrementAction = {
  type: ActionTypes
};

export type Action = IncrementAction | DecrementAction;

export interface CounterState {
  count: number;
}
