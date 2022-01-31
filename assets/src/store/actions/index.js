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
  CLEAR_ERROR,
} from "../types";

export const fetchTemps = () => ({
  type: FETCH_TEMPS,
});

export const fetchTempsSuccess = ({ payload }) => ({
  type: FETCH_TEMPS_SUCCESS,
  payload,
});

export const fetchTempsFailure = ({ error }) => ({
  type: FETCH_TEMPS_FAILURE,
  error,
});

export const postTemp = ({ payload }) => ({
  type: POST_TEMP,
  payload,
});

export const postTempSuccess = ({ payload }) => ({
  type: POST_TEMP_SUCCESS,
  payload,
});

export const postTempFailure = ({ error }) => ({
  type: POST_TEMP_FAILURE,
  error,
});

export const addTemp = ({ temp }) => ({
  type: ADD_TEMP,
  temp,
});

export const setTemps = ({ temps }) => ({
  type: SET_TEMPS,
  temps,
});

export const setError = ({ error }) => ({
  type: SET_ERROR,
  error,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});
