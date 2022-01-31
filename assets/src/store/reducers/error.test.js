import {
  ErrorReducerRecord,
  errorRecordInitialState,
  reducer,
} from "./error";

describe("ErrorReducerRecord", () => {
  it("matches snapshot", () => {
    expect(new ErrorReducerRecord()).toMatchSnapshot();
  });
});

describe("errorRecordInitialState", () => {
  it("matches snapshot", () => {
    expect(errorRecordInitialState).toMatchSnapshot();
  });
});

describe("error reducer", () => {
  it("handles default when init", () => {
    expect(
      reducer(
        new ErrorReducerRecord(), {}))
      .toEqual(new ErrorReducerRecord());
  });

  it("handles default", () => {
    expect(
      reducer(
        new ErrorReducerRecord({ error: "test" }),
        {}))
      .toEqual(
        new ErrorReducerRecord({ error: "test" }));
  });

  it("handles SET_ERROR", () => {
    expect(
      reducer(
        new ErrorReducerRecord(),
        {
          type: "SET_ERROR",
          error: "test"
        }
      ))
      .toEqual(
        new ErrorReducerRecord({ error: "test" })
      );
  });

  it("handles SET_ERROR when another error is already set", () => {
    expect(
      reducer(
        new ErrorReducerRecord({ error: "test" }),
        {
          type: "SET_ERROR",
          error: "test--2",
        }
      ))
      .toEqual(
        new ErrorReducerRecord({ error: "test--2" })
      );
  });

  it("handles CLEAR_ERROR when empty", () => {
    expect(
      reducer(
        new ErrorReducerRecord(),
        {
          type: "CLEAR_ERROR"
        }
      ))
      .toEqual(
        new ErrorReducerRecord()
      );
  });

  it("handles CLEAR_ERROR when not empty", () => {
    expect(
      reducer(
        new ErrorReducerRecord({ error: "test" }),
        {
          type: "CLEAR_ERROR",
        }
      ))
      .toEqual(
        new ErrorReducerRecord()
      );
  });
});
