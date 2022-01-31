import { List } from "immutable";
import {
  getFTemps,
  getCTemps,
  getKTemps,
  getIsFetching,
  getIsPosting,
} from "./temps";

import {
  TempsReducerRecord
} from "../reducers/temps";

describe("temps selectors", () => {
  it("should handle getFTemps", () => {
    const state = {
      temps: new TempsReducerRecord({
          fahrenheitTemps: List([1,2,3])
        })
    };

    expect(getFTemps(state)).toEqual(List([1,2,3]));
  });

  it("should handle getCTemps", () => {
    const state = {
      temps: new TempsReducerRecord({
          celsiusTemps: List([1,2,3])
        })
    };

    expect(getCTemps(state)).toEqual(List([1,2,3]));

  });

  it("should handle getKTemps", () => {
    const state = {
      temps: new TempsReducerRecord({
          kelvinTemps: List([1,2,3])
        })
    };

    expect(getKTemps(state)).toEqual(List([1,2,3]));

  });

  it("should handle getIsFetching", () => {
    const state = {
      temps: new TempsReducerRecord({ isFetching: true })
    };

    expect(getIsFetching(state)).toEqual(true);
  });

  it("should handle getIsPosting", () => {
    const state = {
      temps: new TempsReducerRecord({ isPosting: true })
    };


    expect(getIsPosting(state)).toEqual(true);
  });
});
