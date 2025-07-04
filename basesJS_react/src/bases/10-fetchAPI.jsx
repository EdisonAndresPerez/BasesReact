const apiKey = 'AItV0ZWp0fT9oswJofGnfCTTHSBVTqj6';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

peticion
//esto devuelve una promesa que la convertimos en js
.then( resp => resp.json() )
//luego el resultado de la promesa se guarda en data
.then( ({data}) => {
  const {url} = data.images.original;
  console.log(url)

  const img = document.createElement('img');
  img.src = url

  document.body.append(img)
}) 



function App() {
  return <>

  </>;
}

export default App;
