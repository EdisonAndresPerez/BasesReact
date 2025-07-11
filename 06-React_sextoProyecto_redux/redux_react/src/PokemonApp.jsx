import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <>
      <h1>Lista pokemon</h1>
      <hr />
      <span>loading.... {isLoading ? "Cargando" : "Listo"}</span>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(getPokemons(page))} disabled={isLoading}>
        next
      </button>
    </>
  );
};
