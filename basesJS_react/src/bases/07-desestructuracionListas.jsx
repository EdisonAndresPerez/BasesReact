import "./App.css";

const nombresPersonas = ["Juan", "Ana", "Pedro", "María", "Luis"];

//Si queremos llamar a ana primero
// dejamos un espacio vacío en el primer elemento del array
// const nombresPersonas = ["", "Ana", "Pedro", "María"]
const [primerNombre, segundoNombre, tercerNombre, cuartoNombre] = nombresPersonas;

console.log(nombresPersonas);
console.log(primerNombre);
console.log(segundoNombre);
console.log(tercerNombre);
console.log(cuartoNombre);



const retornarArreglo = () => {
  return ["ABC", 123, true, false, "Hola Mundo"];
}

const [letras, numeros, booleano, booleano2, saludo] = retornarArreglo();

//OJITOOOO
//llamar todos los elemntos de la lista para que funcione
console.log(letras, numeros, booleano, booleano2, saludo);
console.log(retornarArreglo());


//-------------------------------
//TAREAAAA
//1.el primer valor del arr se llamara nombre
//2.el segundo se llamara setNombre


const tarea = (valor) => {
  return [valor, ()=>{console.log("Hola Mundo")}];
}

const [nombre, setNombre] = tarea(20);
console.log(nombre);
setNombre()


function App() {


  return <>
  

  
  
  </>;
}

export default App;
