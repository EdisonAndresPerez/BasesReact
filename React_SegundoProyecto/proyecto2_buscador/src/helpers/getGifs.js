/**
 * Consulta la API de Dragon Ball y retorna un array de personajes según la categoría (nombre) buscada.
 * @param {string} categoria - Nombre del personaje a buscar en la API.
 * @returns {Array<Object>} Array de objetos con información de los personajes encontrados.
 */
export const getGifs = async( categoria ) => {
    // Construye la URL de la API con el nombre del personaje y el límite de resultados
    const url = `https://dragonball-api.com/api/characters?name=${ categoria }&limit=10`;

    // Realiza la petición HTTP a la API
    const resp = await fetch( url );

    // Convierte la respuesta a formato JSON
    const responseData = await resp.json();
    
    // Si la respuesta es un array directamente, mapea los personajes
    if (Array.isArray(responseData)) {
        const characters = responseData.map( character => ({
            id: character.id,           // ID único del personaje
            name: character.name,       // Nombre del personaje
            ki: character.ki,           // Ki actual del personaje
            maxKi: character.maxKi,     // Ki máximo del personaje
            race: character.race,       // Raza del personaje
            image: character.image      // URL de la imagen del personaje
        }));
        return characters;
    }

    // Si no se encuentra información válida, retorna un array vacío
    return [];
}