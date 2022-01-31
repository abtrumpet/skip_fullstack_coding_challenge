import { take, put, call } from "redux-saga/effects";
import { List } from "immutable";
import { get, post } from "axios";

import {
  fetchTempsSuccess,
  fetchTempsFailure,
  setFTemps,
  setCTemps,
  setKTemps,
} from "../actions";

import { convert } from "../../conversions";

import {
  ADD_TEMP,
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
    const { payload: { temps } } = yield take(FETCH_TEMPS_SUCCESS);

    yield put(setFTemps(List(temps)));

    const cTemps = temps.map(t => convert(t, "celsius"));
    const kTemps = temps.map(t => convert(t, "kelvin"));

    yield put(setCTemps(List(cTemps)));
    yield put(setKTemps(List(kTemps)));
  }
}

function* addTempSaga() {
  while (true) {
    yield take(ADD_TEMP);
  }
}

export {
  addTempSaga,
  fetchTempsSaga,
  fetchTempsSuccessSaga,
}
