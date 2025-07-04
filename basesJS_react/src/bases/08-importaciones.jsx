import {Heroes} from "../data/Heroes";


 export const getHeroesByID = (id) => {
    return Heroes.find((heroe) => heroe.id === id)
  }
  //console.log(getHeroesByID(3))


  //usar metodo filter
 export const getHeroesByOwner = (owner) => {
    return Heroes.filter((heroe) => heroe.owner === owner)
  }
 // console.log(getHeroesByOwner('DC'))


