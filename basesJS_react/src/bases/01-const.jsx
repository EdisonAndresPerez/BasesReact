import './App.css';

function App() {
  const nombre = "andres";
  const apellido = "gomez";
  const edad = 30;

  console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);

  return (
    <>
      <h1>Hola, soy {nombre} {apellido}</h1>
      <p>Tengo {edad} años.</p>
    </>
  );
}

export default App;
