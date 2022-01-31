import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { reducer as tempsReducer } from "./reducers/temps";
import { reducer as errorReducer } from "./reducers/error";
import {
  addTempSaga,
  fetchTempsSaga,
  fetchTempsSuccessSaga,
} from "./sagas/temps";

const rootReducer = combineReducers({ temps: tempsReducer, error: errorReducer });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

// run the sagas
sagaMiddleware.run(addTempSaga);
sagaMiddleware.run(fetchTempsSaga);
sagaMiddleware.run(fetchTempsSuccessSaga);

export {
  store
};
