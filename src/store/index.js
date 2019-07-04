import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "./counter/sagas";
import type { CounterState } from "./counter/actions";
import counter from "./counter/reducer";

export interface State {
  counter: CounterState;
}

const reducer = combineReducers({ counter });

const sagaMiddleware = createSagaMiddleware();

// $FlowIgnore
export default createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);
