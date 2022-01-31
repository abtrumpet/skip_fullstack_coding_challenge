import {
  getError
} from "./error";

import {
  ErrorReducerRecord
} from "../reducers/error";

describe("error selectors", () => {
  it("should handle getError", () => {
    const state = {
      error: new ErrorReducerRecord({ error: "test error" })
    }

    expect(getError(state)).toEqual("test error");
  });
});
