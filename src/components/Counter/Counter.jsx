// @flow
import React from "react";
import type { CounterState } from "../../store/counter/actions";
import { ClipLoader } from "react-spinners";

interface Props extends CounterState {
  onIncrement: () => void;
  onDecrement: () => void;
  onIncrementAsync: () => void;
}

const Counter = ({
  count,
  loading,
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
    <ClipLoader color="white" loading={loading} />
  </div>
);

export default Counter;
