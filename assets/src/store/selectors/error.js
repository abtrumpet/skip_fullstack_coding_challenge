import { createSelector } from "reselect";

const error = state => state.error;

const getError = createSelector(error, (error) => error.error);

export {
  getError
};
