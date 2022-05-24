import { all } from "redux-saga/effects";

import { pokemonDataSaga } from "./pokemonData";

export default function* rootSaga() {
  yield all([pokemonDataSaga()]);
}
