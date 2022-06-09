import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./constants";

const initialState = {
  results: [],
  nextPageLoading: false,
  loading: false,
  error: false,
  pageNumber: 1,
  scroll: 0,
  nextPageNoMoreMsg: false,

  count: 0,
};

export const pokemonSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    pokemonAllDataRequest: (state) => {
      state.loading = true;
    },
    pokemonAllDataRequestSuccess: (state, action) => {
      state.loading = false;
      state.results = action.payload;
      state.error = false;
    },
    pokemonAllDataRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    pokemonDataRequest(state) {
      state.loading = true;
    },
    pokemonDataSuccess(state, action) {
      state.results = [action.payload];
      state.loading = false;
      state.error = false;
    },
    pokemonDataError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    netxPageRequest(state) {
      state.nextPageLoading = true;
      state.pageNumber += 1;
      state.scroll = 0;
    },
    netxPageRequestSuccess(state, action) {
      state.nextPageLoading = false;

      state.results = [...state.results, ...action.payload];
    },
    netxPageRequestError(state, action) {
      state.nextPageLoading = false;
      state.error = action.payload;
    },
    nextPageNoMore(state, action) {
      state.nextPageLoading = false;
      state.nextPageNoMoreMsg = action.payload;
    },

    START_LOADING(state) {
      state.count = 50;
    },
    FINISH_LOADING(state) {
      state.count = 100;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
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

  START_LOADING,
  FINISH_LOADING,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
