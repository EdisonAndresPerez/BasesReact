import  { useState } from "react";
import "./styles.css";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


/**
 * Componente principal de la aplicación.
 * Gestiona el estado de las categorías y renderiza los componentes de búsqueda y resultados.
 */
export default function GifExpertApp() {
  const [categoria, setCategoria] = useState([
    //Estado que almacena las categorías de personajes de Dragon Ball
    //Este estado se crea con un valor inicial de un array con algunos personajes 
    "Goku", 
  ]);

  

  //creamos una funcion que se encarga de añadir una nueva categoria al estado
  //Esta funcion recibe un nuevo personaje y lo añade al array de categorias
  //Si el personaje ya existe en el array, no lo añade
  const onAddCategoria = (newCategoria) => {  
    if (categoria.includes(newCategoria)) return;
    // Agrega el nuevo personaje al inicio del array de categorías
    // Esto permite que la búsqueda más reciente aparezca primero en la lista
    setCategoria([ newCategoria, ...categoria ]);
  };

  return (
    <>
      <h1>Dragon Ball Characters</h1>
      {/* Componente para añadir nuevas categorías */}
      {/* Este componente recibe una función que se ejecuta al añadir una nueva categoría */}
      {/* El componente AddCategory se encarga de gestionar el input y el botón para añadir nuevas categorías */}
      <AddCategory onNewCategoria={onAddCategoria} />

      {/* Mapeamos el array de categorías y renderizamos un GifGrid por cada categoría */}
      {/* GifGrid es un componente que se encarga de mostrar los personajes de cada categoría */}
      {categoria.map((categoria) => (
        <GifGrid key={categoria} categoria={categoria} />
      ))}
    </>
  );
}
