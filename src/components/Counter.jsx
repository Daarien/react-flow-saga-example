import React from "react";
import { connect } from "react-redux";
import type { CounterState } from "../store/counter/actions";
import { types } from "../store/counter/actions";
import type { State } from "../store";

interface Props extends CounterState {
  onIncrement: () => void;
  onDecrement: () => void;
  onIncrementAsync: () => void;
}

const Counter = ({
  count,
  onIncrement,
  onDecrement,
  onIncrementAsync
}: Props) => (
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
    <button onClick={onIncrement}>Increment</button>{" "}
    <button onClick={onDecrement}>Decrement</button>
    <hr />
    <div>Clicked: {count} times</div>
  </div>
);

function mapStateToProps({ counter }: State) {
  return {
    count: counter.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch({ type: types.INCREMENT }),
    onDecrement: () => dispatch({ type: types.DECREMENT }),
    onIncrementAsync: () => dispatch({ type: types.INCREMENT_ASYNC })
  };
}

// $FlowIgnore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
