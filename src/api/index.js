const BASE_URL = "https://pokeapi.co/api/v2";
export const IMG_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
export const getPokemonList = (next) => {
  const url = next ? next : `${BASE_URL}/pokemon/?limit=20`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return Promise.resolve(data);
    })
    .catch((err) => {
      throw err;
    });
};
export const getPokemon = (url) => {
  return fetch(`${url}`)
    .then((res) => res.json())
    .then((data) => {
      return Promise.resolve(data);
    })
    .catch((err) => {
      throw err;
    });
};
