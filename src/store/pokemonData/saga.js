import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { noMoreMsg, notFoundMsg } from "./constants";

import { pokeActions } from "../../store/pokemonData/slice";

import {
  pokemonDataAsync,
  pokemonAllDataAsync,
  pokemonAsync,
  pokemonLimitAsync,
} from "../../service/Pokemon/api";

function* handleSearchPokemon({ payload: name }) {
  try {
    const pokemonDta = yield call(pokemonDataAsync, name);

    yield put(pokeActions.pokemonDataSuccess(pokemonDta));
  } catch (error) {
    yield put(pokeActions.pokemonDataError("Pokemon not found..."));
  }
}

function* handlePokemon() {
  try {
    const pokeAllData = yield call(pokemonAllDataAsync);
    const results = pokeAllData.results;
    const allData = yield call(pokemonAsync, results);

    yield put(pokeActions.pokemonAllDataRequestSuccess(allData));
  } catch (error) {
    yield put(pokeActions.pokemonAllDataRequestError("Pokemon not found..."));
  }
}

function* handleNextPage({ payload: pageNumber }) {
  try {
    const data = yield call(pokemonLimitAsync, pageNumber);
    const results = data.results;

    const allData = yield call(pokemonAsync, results);

    if (allData.length > 0) {
      yield put(pokeActions.netxPageRequestSuccess(allData));
    } else {
      yield put(pokeActions.nextPageNoMore(noMoreMsg));
    }
  } catch (error) {
    yield put(pokeActions.netxPageRequestError(notFoundMsg));
  }
}

export default function* pokemonDataWatcher() {
  yield takeLatest(pokeActions.pokemonDataRequest, handleSearchPokemon);
  yield takeLatest(pokeActions.pokemonAllDataRequest, handlePokemon);
  yield takeEvery(pokeActions.netxPageRequest, handleNextPage);
}
