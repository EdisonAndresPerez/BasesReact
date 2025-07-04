

//funcion con promesas y .then()
//obtener url falso creado por mi
//creamos una variable y seguido una funcion flecha
const getObtenerUrl = () => {
  //creamos variable exito
  //exito sera igual true o false
  const exito = false

  //retornamos una nueva promesa
  //usamos los parametros resolve y reject
  // son  parametros que se usan siempre al retornar promesas
  return  new Promise( (resolve, reject) => {
    //usamos la condicion if else en donde:
    // si la variable exito es true entonces 
    if(exito){
      //llamamos el parametro resolve
      //es para dar la respuesta correcta
      resolve('https://edisonperez.com')
      //si no :
      //llamamos el parametro reject 
      //y damos la respuesta 
    } else {
      reject("ERRORRRRRRR")
    }
  })
}

//ejecutamos la funcion getObtenerUrl()
//usamos then para ejecutar la respuesta correcta
//usamos un console log para poder mostrar en consola
getObtenerUrl().then(console.log)



//creamos una funcion llamada getObtenerUrlAsyn
//la funcion sera async y es una funcion flecha 
const getObtenerUrlAsyn = async() => {
  //retornamos una URL creada por mi 
  return 'https://obtenerUrlConAsync.com'
}

//llamamos la funcion getObtenerUrlAsyn
//usamos then para ejecutar la respuesta correcta 
//usamos en console.log para poder mostrar en consola
getObtenerUrlAsyn().then(console.log)

//----------------------------------------------

//creamos una funcion obtenerGif
//es una funcion async y es funcion flecha
const obtenerGif = async () => {
  //dentro de la funcion creamos la variable apiKey
  //dentro de ella guardamos las key de la API sacada de https://developers.giphy.com/
  const apikey = 'AItV0ZWp0fT9oswJofGnfCTTHSBVTqj6';
  //creamos variable resp
  //usamos await que dice que espera el resultado de la promesa
  const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
  //desestructuramos la respuesta que guardamos en la variable resp
  //desestructuramos la variable o el dato data
  //aqui usamos await para decirle : espera que la respuesta se convierta en un JSON
  const { data } = await resp.json();
  //hacemos un console.log de la respuesta del json guardado en data
  console.log(data);
};

obtenerGif();



function App() {
  return <>

  </>;
}

export default App;
