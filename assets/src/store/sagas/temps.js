import { take, put, call, select } from "redux-saga/effects";
import { List } from "immutable";
import { get, post } from "axios";

import {
  fetchTempsSuccess,
  fetchTempsFailure,
  postTempSuccess,
  postTempFailure,
  setFTemps,
  setCTemps,
  setKTemps,
} from "../actions";

import {
  getFTemps
} from "../selectors/temps";

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

    /**
     * Update celsius, kelvin table here
     */
    yield put(setCTemps(List(cTemps)));
    yield put(setKTemps(List(kTemps)));
  }
}

function* addTempSaga() {
  while (true) {
    try {
      const { temp } = yield take(ADD_TEMP);

      yield call(post, ["//localhost:4000/api/temperature", { temp }]);

      yield put(postTempSuccess({}));

      const temps = yield select(getFTemps);

      /**
       * Update celsius, kelvin table here
       **/
      const cTemps = temps.map(t => convert(t, "celsius"));
      const kTemps = temps.map(t => convert(t, "kelvin"));

      yield put(setCTemps(List(cTemps)));
      yield put(setKTemps(List(kTemps)));
    } catch (error) {
      yield put(postTempFailure({error}));
    }
  }
}

export {
  addTempSaga,
  fetchTempsSaga,
  fetchTempsSuccessSaga,
}
