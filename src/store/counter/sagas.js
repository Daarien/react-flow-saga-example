// @flow
import { put, takeEvery } from "redux-saga/effects";
import { types } from "./actions";

function delay(ms: number) {
  return new Promise(res => setTimeout(res, ms));
}

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  yield put({ type: types.LOADING });
  yield delay(1000);
  yield put({ type: types.INCREMENT });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(types.INCREMENT_ASYNC, incrementAsync);
}
