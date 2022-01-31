import {
  fetchTemps,
  fetchTempsSuccess,
  fetchTempsFailure,
  
  postTemp,
  postTempSuccess,
  postTempFailure,

  addTemp,
  setTemps,

  setError,
  clearError,
} from "./index";

describe("actions", () => {
  test("fetchTemps", () => {
    expect(fetchTemps()).toEqual({
      type: "FETCH_TEMPS",
    });
  });

  test("fetchTempsSuccess", () => {
    expect(fetchTempsSuccess({payload: {prop1: "value1"}})).toEqual({
      type: "FETCH_TEMPS_SUCCESS",
      payload: {prop1: "value1"},
    });
  });

  test("fetchTempsFailure", () => {
    expect(fetchTempsFailure({error: "test"})).toEqual({
      type: "FETCH_TEMPS_FAILURE",
      error: "test",
    });
  });

  test("postTemp", () => {
    expect(postTemp({ payload: { temp: 45 } })).toEqual({
      type: "POST_TEMP",
      payload: { temp: 45 },
    });
  });

  test("postTempSuccess", () => {
    expect(postTempSuccess({ payload: { data: [1,2,3] } })).toEqual({
      type: "POST_TEMP_SUCCESS",
      payload: { data: [1,2,3] },
    });
  });

  test("postTempFailure", () => {
    expect(postTempFailure({ error: "test" })).toEqual({
      type: "POST_TEMP_FAILURE",
      error: "test"
    });
  });

  test("addTemp", () => {
    expect(addTemp({ temp: 123 })).toEqual({
      type: "ADD_TEMP",
      temp: 123,
    });
  });

  test("setTemps", () => {
    expect(setTemps({ temps: [1,2,3] })).toEqual({
      type: "SET_TEMPS",
      temps: [1,2,3],
    });
  });

  test("setError", () => {
    expect(setError({ error: "test" })).toEqual({
      type: "SET_ERROR",
      error: "test",
    });
  });

  test("clearError", () => {
    expect(clearError()).toEqual({
      type: "CLEAR_ERROR"
    });
  });
});
