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

export const setFTemps = ({ temps }) => ({
  type: SET_F_TEMPS,
  temps,
});

export const setCTemps = ({ temps }) => ({
  type: SET_C_TEMPS,
  temps,
});

export const setKTemps = ({ temps }) => ({
  type: SET_K_TEMPS,
  temps,
});

export const setError = ({ error }) => ({
  type: SET_ERROR,
  error,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});
