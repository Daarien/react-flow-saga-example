// @flow
import type { Action, DogsState } from "./actions";
import { types } from "./actions";

const initState: DogsState = {
  url: "",
  loading: false
};

export default function reducer(state: DogsState = initState, action: Action) {
  switch (action.type) {
    case types.FETCH_SUCCEEDED:
      return { ...state, url: action.url, loading: false };

    case types.FETCH_FAILED:
      return { ...state, url: "", loading: false };

    case types.RESET:
      return initState;

    case types.LOADING:
      return { ...state, loading: action.state };

    default:
      return state;
  }
}
