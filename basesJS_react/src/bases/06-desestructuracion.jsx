import "./App.css";

//Desestructuracion
//Asignacion por desestructuracion

  const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
  };
  console.log(persona);
  console.log(persona.nombre);
  console.log(persona.edad);
  console.log(persona.profesion);

  const {nombre} = persona
  console.log(nombre)


const obtenerUsuario = ({ clave, edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
    datos: {
      numerocel : 123456789,
      direccion: "Calle Falsa 123"
    }
  };
};
const {nombreClave, anios, datos:{numerocel, direccion} } = obtenerUsuario(persona);

console.log(nombreClave, anios);
console.log(numerocel, direccion); 

function App() {


  return <>
  

  
  
  </>;
}

export default App;
