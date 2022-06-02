import axiosInstance, { axiosGet } from "../axios";

import API_ROUTES from "./apiRoutes";

const pokemonDataAsync = async (pokemonName) => {
  const pokemonsDataResponse = await axiosInstance
    .get(`${API_ROUTES.pokemon}/${pokemonName}`)
    .then((response) => response.data);

  return pokemonsDataResponse;
};

const pokemonAllDataAsync = async () => {
  const pokemonsAllData = await axiosInstance
    .get(`${API_ROUTES.pokemon}`)
    .then((response) => response.data);
  return pokemonsAllData;
};

const pokemonAsync = async (results) => {
  const responseData = results.map(async (result) => {
    const pokemonDataResponse = await axiosGet(result.url);

    return pokemonDataResponse.data;
  });

  return Promise.all(responseData);
};

const pokemonLimitAsync = async (pageNumber) => {
  const limit = 20;
  const pokeLimitData = await axiosInstance.get(
    `${API_ROUTES.pokemon}?limit=${limit}&offset=${pageNumber * limit}`
  );

  return pokeLimitData;
};

export {
  pokemonDataAsync,
  pokemonAllDataAsync,
  pokemonAsync,
  pokemonLimitAsync,
};
