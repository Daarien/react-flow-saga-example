export const types = {
  DOG_REQUESTED: "dogs/DOG_REQUESTED",
  LOADING: "dogs/LOADING",
  FETCH_SUCCEEDED: "dogs/FETCH_SUCCEEDED",
  FETCH_FAILED: "dogs/FETCH_FAILED"
};

type ActionTypes = $Keys<typeof types>;

type LoadingAction = {
  type: ActionTypes,
  state: boolean
};

type SuccessAction = {
  type: ActionTypes
};

type FailAction = {
  type: ActionTypes
};

export type Action = SuccessAction | FailAction | LoadingAction;

export interface DogsState {
  url: string;
  loading: boolean;
}
