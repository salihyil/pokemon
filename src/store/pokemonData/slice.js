import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./constants";

const initialState = {
  results: [],
  loading: true,
  error: false,
  pageNumber: 0,
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
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
