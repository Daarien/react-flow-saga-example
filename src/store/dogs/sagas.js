import { put, call, takeEvery } from "redux-saga/effects";
import { types } from "./actions";

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .catch(e => {
      console.error(e);
    });
}

const loading = state => ({ type: types.LOADING, state });
const showDog = url => ({ type: types.FETCH_SUCCEEDED, url });
const showError = error => ({ type: types.FETCH_FAILED, error });

function* getDog() {
  yield put(loading(true));
  try {
    const dog = yield call(fetchDog);
    console.log("dog", dog);
    if (dog.status === "success") {
      yield put(showDog(dog.message));
    } else {
      yield put(loading(false));
    }
  } catch (e) {
    yield put(showError(e));
  }
}

// $FlowIgnore
export function* watchGetDog() {
  // $FlowIgnore
  yield takeEvery(types.DOG_REQUESTED, getDog);
}
