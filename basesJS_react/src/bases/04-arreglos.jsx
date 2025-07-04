import "./App.css";

function App() {
  const listaNumero = [1, 2, 3, 4];
  console.log('imprimir listaNumero: ' + listaNumero);

  const lista2 = [...listaNumero, 5];
  console.log('imprimir lista2: ' + lista2);

  const lista3 = lista2.map((numero)=> {
    return numero;
  })
  console.log('Imprimir lista3: ' + lista3)

  return <>


  </>;
}

export default App;
