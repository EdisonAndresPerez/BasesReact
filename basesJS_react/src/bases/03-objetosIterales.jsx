import './App.css';

function App() {


  const persona = {
    nombre : 'Juan',
    edad: 30,
    profesion: 'Desarrollador',
    habilidades: ['JavaScript', 'React', 'Node.js'],
    direccion: {
      calle: 'Calle Falsa',
      numero: 123,
      ciudad: 'Ciudad Imaginaria'
  }
}

console.log(persona.habilidades[1]); 

  return (
    <> 
      
    </>
  );
}

export default App;
