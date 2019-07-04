import { put, takeEvery, all } from "redux-saga/effects";
import { types } from "./actions";

function delay(ms: number) {
  return new Promise(res => setTimeout(res, ms));
}

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: types.INCREMENT });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery(types.INCREMENT_ASYNC, incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
// $FlowIgnore
export default function* rootSaga() {
  // $FlowIgnore
  yield all([watchIncrementAsync()]);
}
