// @flow
import type { Action, CounterState } from "./actions";
import { types } from "./actions";

const initState: CounterState = {
  count: 0,
  loading: false
};

export default function reducer(
  state: CounterState = initState,
  action: Action
) {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, count: state.count + 1, loading: false };

    case types.DECREMENT:
      return { ...state, count: state.count - 1 };

    case types.RESET:
      return { ...state, count: 0 };

    case types.LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
}
