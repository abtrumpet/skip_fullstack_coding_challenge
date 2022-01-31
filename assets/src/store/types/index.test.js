import { 
  FETCH_TEMPS,
  FETCH_TEMPS_SUCCESS,
  FETCH_TEMPS_FAILURE,
  POST_TEMP,
  POST_TEMP_SUCCESS,
  POST_TEMP_FAILURE,
  ADD_TEMP,
  SET_TEMPS,
  SET_ERROR,
  CLEAR_ERROR
} from "./index";

describe("pedantic types", () => {
  test("FETCH_TEMPS", () => {
    expect(FETCH_TEMPS).toEqual("FETCH_TEMPS");
  });

  test("FETCH_TEMPS_SUCCESS", () => {
    expect(FETCH_TEMPS_SUCCESS).toEqual("FETCH_TEMPS_SUCCESS");
  });

  test("FETCH_TEMPS_FAILURE", () => {
    expect(FETCH_TEMPS_FAILURE).toEqual("FETCH_TEMPS_FAILURE");
  });

  test("POST_TEMP", () => {
    expect(POST_TEMP).toEqual("POST_TEMP");
  });

  test("POST_TEMP_SUCCESS", () => {
    expect(POST_TEMP_SUCCESS).toEqual("POST_TEMP_SUCCESS");
  });

  test("POST_TEMP_FAILURE", () => {
    expect(POST_TEMP_FAILURE).toEqual("POST_TEMP_FAILURE");
  });

  test("ADD_TEMP", () => {
    expect(ADD_TEMP).toEqual("ADD_TEMP");
  });

  test("SET_TEMPS", () => {
    expect(SET_TEMPS).toEqual("SET_TEMPS");
  });

  test("SET_ERROR", () => {
    expect(SET_ERROR).toEqual("SET_ERROR");
  });

  test("CLEAR_ERROR", () => {
    expect(CLEAR_ERROR).toEqual("CLEAR_ERROR");
  });
});
