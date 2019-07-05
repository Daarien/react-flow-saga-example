import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

// local states
import type { CounterState } from "./counter/actions";
import type { DogsState } from "./dogs/actions";

// watching sagas
import { watchIncrementAsync } from "./counter/sagas";
import { watchGetDog } from "./dogs/sagas";

// reducers
import counter from "./counter/reducer";
import dogs from "./dogs/reducer";

export interface State {
  counter: CounterState;
  dogs: DogsState;
}

const reducer = combineReducers({ counter, dogs });

const sagaMiddleware = createSagaMiddleware();

// $FlowIgnore
export default createStore(reducer, applyMiddleware(sagaMiddleware));

// single entry point to start all Sagas at once
// $FlowIgnore
function* saga() {
  // $FlowIgnore
  yield all([watchIncrementAsync(), watchGetDog()]);
}

sagaMiddleware.run(saga);
