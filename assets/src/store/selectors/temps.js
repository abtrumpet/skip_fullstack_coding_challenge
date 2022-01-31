import { createSelector } from "reselect";

const temps = state => state?.temps;

const getFTemps = createSelector(temps, temps => temps.fahrenheitTemps);

const getCTemps = createSelector(temps, temps => temps.celsiusTemps);

const getKTemps = createSelector(temps, temps => temps.kelvinTemps);

const getIsFetching = createSelector(temps, temps => temps.isFetching);

const getIsPosting = createSelector(temps, temps => temps.isPosting);

export {
  getFTemps,
  getCTemps,
  getKTemps,
  getIsFetching,
  getIsPosting,
};
