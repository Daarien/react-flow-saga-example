import Counter from "./Counter";
import { connect } from "react-redux";
import type { State } from "../../store";
import { types } from "../../store/counter/actions";

function mapStateToProps({ counter }: State) {
  return {
    count: counter.count,
    loading: counter.loading
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
