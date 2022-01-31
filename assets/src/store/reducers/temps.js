import { Record, List } from "immutable";
import {
  FETCH_TEMPS,
  FETCH_TEMPS_SUCCESS,
  FETCH_TEMPS_FAILURE,
  POST_TEMP,
  POST_TEMP_SUCCESS,
  POST_TEMP_FAILURE,
  ADD_TEMP,
  SET_F_TEMPS,
  SET_C_TEMPS,
  SET_K_TEMPS,
} from "../types";

const tempsReducerInitialState = {
  fahrenheitTemps: List(),
  celsiusTemps: List(),
  kelvinTemps: List(),
  isFetching: false,
  isPosting: false,
};

class TempsReducerRecord extends Record(tempsReducerInitialState){}

const reducer = (state = tempsReducerInitialState, action) => {
  switch(action.type) {
    case FETCH_TEMPS:
      return state.set("isFetching", true);

    case FETCH_TEMPS_FAILURE:
    case FETCH_TEMPS_SUCCESS:
      return state.set("isFetching", false);

    case POST_TEMP:
      return state.set("isPosting", true);

    case POST_TEMP_FAILURE:
    case POST_TEMP_SUCCESS:
      return state.set("isPosting", false);

    case ADD_TEMP:
      return state.update("fahrenheitTemps", x => x.push(action.temp));

    case SET_F_TEMPS:
      return state.set("fahrenheitTemps", List(action.temps));

    case SET_C_TEMPS:
      return state.set("celsiusTemps", List(action.temps));

    case SET_K_TEMPS:
      return state.set("kelvinTemps", List(action.temps));

    default:
      return state;
  }
}

export {
  TempsReducerRecord,
  tempsReducerInitialState,
  reducer,
};
