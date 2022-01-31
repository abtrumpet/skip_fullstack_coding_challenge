import { take, put, call } from "redux-saga/effects";
import { get, post } from "axios";

import {
  fetchTempsSuccess,
  fetchTempsFailure,
} from "../actions";

import {
  FETCH_TEMPS,
  FETCH_TEMPS_SUCCESS,
  FETCH_TEMPS_FAILURE,
} from "../types";

function* fetchTempsSaga() {
  while (true) {
    try {
      yield take(FETCH_TEMPS);

      const { temps } = yield call(get, ["//localhost:4000/api/temperature"]);

      yield put(fetchTempsSuccess({ payload: { temps } }));
    } catch (error) {
      yield put(fetchTempsFailure({ error }));
    }
  }
}

function* fetchTempsSuccessSaga() {
  while (true) {
    const { payload } = yield take(FETCH_TEMPS_SUCCESS);


  }
}

export {
  fetchTempsSaga,
  fetchTempsSuccessSaga,
}
