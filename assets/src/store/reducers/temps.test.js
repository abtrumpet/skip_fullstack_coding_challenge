import { List } from "immutable";

import {
  TempsReducerRecord,
  tempsReducerInitialState,
  reducer,
} from "./temps";

describe("TempsReducerRecord", () => {
  test("it matches snapshot", () => {
    expect(new TempsReducerRecord()).toMatchSnapshot();
  });
});

describe("tempsReducerInitialState", () => {
  test("it matches snapshot", () => {
  
    expect(tempsReducerInitialState).toMatchSnapshot();
  });
});

describe("temps reducer", () => {
  test("it handles default on init", () => {
    expect(reducer(new TempsReducerRecord(), {})).toEqual(new TempsReducerRecord());
  });

  test("it handles default", () => {
    expect(reducer(new TempsReducerRecord({isFetching: true}), {})).toEqual(new TempsReducerRecord({isFetching: true}));
  });

  it("handles FETCH_TEMPS", () =>{
    expect(reducer(new TempsReducerRecord(), {type: "FETCH_TEMPS"})).toEqual(new TempsReducerRecord({isFetching: true}));
  });

  it("handles FETCH_TEMPS_SUCCESS", () => {
    expect(reducer(new TempsReducerRecord({isFetching: true}), {type: "FETCH_TEMPS_SUCCESS" })).toEqual(new TempsReducerRecord({isFetching: false}));
  });

  it("handle FETCH_TEMPS_FAILURE", () => {
    expect(reducer(new TempsReducerRecord({isFetching: true}), {type: "FETCH_TEMPS_FAILURE" })).toEqual(new TempsReducerRecord({isFetching: false}));
  });

  it("handles POST_TEMP", () => {
    expect(reducer(new TempsReducerRecord(), {type: "POST_TEMP"})).toEqual(new TempsReducerRecord({isPosting: true}));
  });

  it("handles POST_TEMP_SUCCESS", () => {
    expect(reducer(new TempsReducerRecord({ isPosting: true }), {type: "POST_TEMP_SUCCESS"})).toEqual(new TempsReducerRecord({isPosting: false}));
  });

  it("handles POST_TEMP_FAILURE", () => {
    expect(reducer(new TempsReducerRecord({ isPosting: true }), {type: "POST_TEMP_FAILURE"})).toEqual(new TempsReducerRecord({isPosting: false}));
  });

  it("handles ADD_TEMP 1", () => {
    expect(
      reducer(
        new TempsReducerRecord(), {type: "ADD_TEMP", temp: 10 }))
      .toEqual(new TempsReducerRecord({ fahrenheitTemps: List([10]) }));
  });

  it("handles ADD_TEMP 2", () => {
    expect(
      reducer(
        new TempsReducerRecord({ fahrenheitTemps: List([ 10 ])}), {type: "ADD_TEMP", temp: 30 }))
      .toEqual(new TempsReducerRecord({ fahrenheitTemps: List([ 10, 30 ]) }));
  });

  it("handles ADD_TEMP 3", () => {
    expect(
      reducer(
        new TempsReducerRecord({ fahrenheitTemps: List([ 10, 30, 50 ])}), {type: "ADD_TEMP", temp: 70 }))
      .toEqual(new TempsReducerRecord({ fahrenheitTemps: List([ 10, 30, 50, 70 ]) }));
  });

  const runTestSetTemps = ({ type, key }) => {
    it(`handles ${type} 1`, () => {
      expect(
        reducer(
          new TempsReducerRecord(), {type, temps: [1,2,3]}))
        .toEqual(new TempsReducerRecord({ [key]: List([1,2,3]) }));
    });

    it(`handles ${type} 2`, () => {
      expect(
        reducer(
          new TempsReducerRecord(), {type, temps: List([1,2,3])}))
        .toEqual(new TempsReducerRecord({ [key]: List([1,2,3]) }));
    });

    it(`handles ${type} 3`, () => {
      expect(
        reducer(
          new TempsReducerRecord(
            {
              [key]: List([1,2,3])
            }
          ), {type, temps: List([3,4,5])}))
        .toEqual(new TempsReducerRecord({ [key]: List([3,4,5]) }));
    });

    it(`handles ${type} 4`, () => {
      expect(
        reducer(
          new TempsReducerRecord(
            {
              [key]: List([1,2,3])
            }
          ), {type, temps: [3,4,5]}))
        .toEqual(new TempsReducerRecord({ [key]: List([3,4,5]) }));
    });
  };

  runTestSetTemps({ type: "SET_F_TEMPS", key: "fahrenheitTemps" });
  runTestSetTemps({ type: "SET_C_TEMPS", key: "celsiusTemps" });
  runTestSetTemps({ type: "SET_K_TEMPS", key: "kelvinTemps" });
});
