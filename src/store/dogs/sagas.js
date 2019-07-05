import { put, call, takeEvery } from "redux-saga/effects";
import { types } from "./actions";

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(res =>
    res.json()
  );
}

const loading = state => ({ type: types.LOADING, state });
const showDog = url => ({ type: types.FETCH_SUCCEEDED, url });

function* getDog() {
  yield put(loading(true));
  const dog = yield call(fetchDog);
  console.log("dog", dog);
  if (dog.status === "success") {
    yield put(showDog(dog.message));
  } else {
    yield put(loading(false));
  }
}

export function* watchGetDog() {
  yield takeEvery(types.DOG_REQUESTED, getDog);
}
