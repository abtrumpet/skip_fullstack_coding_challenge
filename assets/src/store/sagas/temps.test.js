import generatorFF from "generator-fast-forward";
import { List } from "immutable";
import { take, put, call } from "redux-saga/effects";
import { get, post } from "axios";

import { 
  setFTemps,
  // setUTemps,
  setCTemps,
  setKTemps,
} from "../actions";

import {
  addTempSaga,
  fetchTempsSaga,
  fetchTempsSuccessSaga,
  postTempSaga
} from "./temps";

describe("fetchTempsSaga", () => {
  it("should yield take(FETCH_TEMPS)", () => {
    const saga = fetchTempsSaga();
    generatorFF(0)(saga);

    expect(saga.next().value).toEqual(
      take("FETCH_TEMPS")
    );
  });

  it("should yield call()", () => {
    const saga = fetchTempsSaga();
    generatorFF(1)(saga);

    expect(saga.next().value).toEqual(
      call(get, ["//localhost:4000/api/temperature"]));
  });

  it("should yield put(FETCH_TEMPS_SUCCESS)", () => {
    const saga = fetchTempsSaga();
    generatorFF(2)(saga);

    expect(saga.next({ temps: [1,2,3] }).value).toEqual(
      put({ type: "FETCH_TEMPS_SUCCESS", payload: { temps: [1,2,3] } }));
  });

  it("should yield put(FETCH_TEMPS_FAILURE) if error", () => {
    const saga = fetchTempsSaga();
    generatorFF(2)(saga);

    expect(saga.next().value).toEqual(
      put({ type: "FETCH_TEMPS_FAILURE", error: new TypeError("Cannot destructure property 'temps' of '(intermediate value)' as it is undefined.") })
    );
  });
});

describe("fetchTempsSuccessSaga", () => {
  it("should yield take(FETCH_TEMPS_SUCCESS)", () => {
    const saga = fetchTempsSuccessSaga();
    generatorFF(0)(saga);

    expect(saga.next().value).toEqual(
      take("FETCH_TEMPS_SUCCESS")
    );
  });

  it("should yield put(setFTemps)", () => {
    const saga = fetchTempsSuccessSaga();
    generatorFF(1)(saga);

    expect(saga.next({ payload: { temps: [1,2,3] }}).value)
      .toEqual(
        put(
          setFTemps(List([1,2,3]))
        )
      );
  });

  it("should yield put(setCTemps)", () => {
    const saga = fetchTempsSuccessSaga();
    generatorFF(2)(saga, [{ index: 1, value: { payload: { temps: [1,2,3] }}}]);

    expect(saga.next().value).toEqual(
      put(
        setCTemps(List([-17, -16, -16]))
      )
    );
  });

  it("should yield put(setKTemps)", () => {
    const saga = fetchTempsSuccessSaga();
    generatorFF(3)(saga, [{ index: 1, value: { payload: { temps: [1,2,3] }}}]);

    expect(saga.next().value).toEqual(
      put(
        setKTemps(List([256, 256, 258]))
      )
    );
  });
});

describe("addTempSaga", () => {
  it("should yield take(ADD_TEMP)", () => {
    const saga = addTempSaga();
    generatorFF(0)(saga);
  });
});
