
import { getHeroesByID } from "./bases/08-importaciones";

//buscar heroe por id
const idBuscado = 50;


const promesas = new Promise((resolve, reject) => {
  setTimeout(() => {
      const heroe = getHeroesByID(idBuscado)
      
    if(heroe){
      resolve(heroe);
    }
    else {
      reject("no se encontro el heroe " + idBuscado)
    }
  }, 3000);
})

promesas.then((heroe) => {
  console.log("¡La promesa se ha resuelto!", heroe);
})
.catch((error) => {
  console.error("¡La promesa ha sido rechazada!", error);
})


function App() {


  return <>

  
  <h3>prueba</h3>

  </>;
}

export default App;
