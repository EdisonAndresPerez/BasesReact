import "./App.css";

function App() {
  // const saludar = function(nombre) {
  //   return 'hola' + nombre
  //}
  //console.log(saludar('juan'))

  const saludar2 = (nombre) => {
    return "hola " + nombre;
  };
  console.log(saludar2("pedro"));

  const saludar3 = () => {
    return "hola mundo";
  }
  console.log(saludar3());

  //------------------------------------------------
  //Tarea De Funciones
  //1.pasarlo a funcion flecha
  //2. tiene que retornar un objeto implicito
  //3. hacer pruebas

  const getUsuarioActivo = () =>({
      id: 1234,
      usuarioNombre : 'juanXD12',
      correo : 'juan@gmail.com',
      estado : 'activo',
    
  });

  console.log(getUsuarioActivo());

  return <></>;
}

export default App;
