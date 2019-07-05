export const types = {
  INCREMENT: "counter/INCREMENT",
  INCREMENT_ASYNC: "counter/INCREMENT_ASYNC",
  DECREMENT: "counter/DECREMENT",
  RESET: "counter/RESET",
  LOADING: "counter/LOADING"
};

type ActionTypes = $Keys<typeof types>;

type IncrementAction = {
  type: ActionTypes
};

type DecrementAction = {
  type: ActionTypes
};

type LoadingAction = {
  type: ActionTypes
};

export type Action = IncrementAction | DecrementAction | LoadingAction;

export interface CounterState {
  count: number;
  loading: boolean;
}
