import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { noMoreMsg, notFoundMsg } from "./constants";

import {
  pokemonDataRequest,
  pokemonDataSuccess,
  pokemonDataError,
  pokemonAllDataRequest,
  pokemonAllDataRequestSuccess,
  pokemonAllDataRequestError,
  netxPageRequest,
  netxPageRequestSuccess,
  netxPageRequestError,
  nextPageNoMore,
} from "../../store/pokemonData/slice";

import {
  pokemonDataAsync,
  pokemonAllDataAsync,
  pokemonAsync,
  pokemonLimitAsync,
} from "../../service/Pokemon/api";

function* handleSearchPokemon({ payload: name }) {
  try {
    const pokemonDta = yield call(pokemonDataAsync, name);

    yield put(pokemonDataSuccess(pokemonDta));
  } catch (error) {
    yield put(pokemonDataError("Pokemon not found..."));
  }
}

function* handlePokemon() {
  try {
    const pokeAllData = yield call(pokemonAllDataAsync);
    const results = pokeAllData.results;
    const allData = yield call(pokemonAsync, results);

    yield put(pokemonAllDataRequestSuccess(allData));
  } catch (error) {
    yield put(pokemonAllDataRequestError("Pokemon not found..."));
  }
}

function* handleNextPage({ payload: pageNumber }) {
  try {
    const data = yield call(pokemonLimitAsync, pageNumber);
    const results = data.results;

    const allData = yield call(pokemonAsync, results);

    if (allData.length > 0) {
      yield put(netxPageRequestSuccess(allData));
    } else {
      yield put(nextPageNoMore(noMoreMsg));
    }
  } catch (error) {
    yield put(netxPageRequestError(notFoundMsg));
  }
}

export default function* pokemonDataWatcher() {
  yield takeLatest(pokemonDataRequest, handleSearchPokemon);
  yield takeLatest(pokemonAllDataRequest, handlePokemon);
  yield takeEvery(netxPageRequest, handleNextPage);
}
