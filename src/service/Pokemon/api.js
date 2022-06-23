import axiosInstance, { axiosGet } from "../axios";

import API_ROUTES from "./apiRoutes";

const pokemonDataAsync = async (pokemonName) => {
  const pokemonsDataResponse = await axiosInstance.get(
    `${API_ROUTES.pokemon}/${pokemonName}`
  );

  return pokemonsDataResponse.data;
};

const pokemonAllDataAsync = async () => {
  const pokemonsAllData = await axiosInstance.get(`${API_ROUTES.pokemon}`);

  return pokemonsAllData.data;
};

const pokemonAsync = (results) => {
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

  return pokeLimitData.data;
};

export {
  pokemonDataAsync,
  pokemonAllDataAsync,
  pokemonAsync,
  pokemonLimitAsync,
};
