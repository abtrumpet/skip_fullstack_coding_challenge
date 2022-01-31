import { Record } from "immutable";

import {
  SET_ERROR,
  CLEAR_ERROR
} from "../types";

const errorRecordInitialState = {
  error: null,
};

class ErrorReducerRecord extends Record(errorRecordInitialState) {}

const reducer = (state = errorRecordInitialState, action) => {
  switch(action.type) {
    case SET_ERROR:
      return state.set("error", action.error);

    case CLEAR_ERROR:
      return state.set("error", null);

    default:
      return state;
  }
};

export {
  ErrorReducerRecord,
  errorRecordInitialState,
  reducer,
};
