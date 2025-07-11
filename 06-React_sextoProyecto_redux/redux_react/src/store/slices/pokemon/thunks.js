import { startLoadingPokemons, setPokemons } from "./pokemonSlice";
import { pokemonApi } from "../../../api/pokemonApi";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    //const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`)
    //const data = await resp.json();
    //console.log(data)

    const {data} = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`)
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
