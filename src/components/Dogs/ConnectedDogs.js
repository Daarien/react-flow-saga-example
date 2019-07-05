import Dogs from "./Dogs";
import { connect } from "react-redux";
import type { State } from "../../store";
import { types } from "../../store/dogs/actions";

function mapStateToProps({ dogs }: State) {
  return {
    url: dogs.url,
    loading: dogs.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDog: () => dispatch({ type: types.DOG_REQUESTED })
  };
}

// $FlowIgnore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dogs);
