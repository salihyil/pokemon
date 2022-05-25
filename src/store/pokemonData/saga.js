import { call, put, takeLatest } from "redux-saga/effects";

import {
  pokemonDataRequest,
  pokemonDataSuccess,
  pokemonDataError,
  pokemonAllDataRequest,
  pokemonAllDataRequestSuccess,
  pokemonAllDataRequestError,
} from "../../store/pokemonData/slice";
import {
  pokemonDataAsync,
  pokemonAllDataAsync,
  pokemonAsync,
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

export default function* pokemonDataWatcher() {
  yield takeLatest(pokemonDataRequest, handleSearchPokemon);
  yield takeLatest(pokemonAllDataRequest, handlePokemon);
}
