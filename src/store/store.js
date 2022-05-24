import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";

import pokeDataReducer from "./pokemonData/slice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  pokeData: pokeDataReducer,
});

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
