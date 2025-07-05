import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
/**
 * Hook personalizado para manejar la búsqueda de personajes de Dragon Ball.
 * Encapsula la lógica de estado y efectos para obtener datos de la API.
 * @param {string} categoria - Nombre del personaje a buscar
 * @returns {Object} Objeto con characters (array de personajes) y loading (estado de carga)
 */

export const useFetchGifs = (categoria) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const charactersData = await getGifs(categoria);
        setCharacters(charactersData);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [categoria]);

  
  return {
    characters,
    loading,
  };
};
