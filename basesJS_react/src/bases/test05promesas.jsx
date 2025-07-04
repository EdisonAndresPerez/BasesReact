// src/bases/getHeroeByAsync.js

const heroes = [
  { id: 1, name: 'Batman', owner: 'DC' },
  { id: 2, name: 'Spiderman', owner: 'Marvel' },
];

export const getHeroeByAsync = (id) => {
  return new Promise((resolve, reject) => {
    const heroe = heroes.find(h => h.id === id);
    if (heroe) {
      setTimeout(() => resolve(heroe), 500);
    } else {
      reject('No se pudo encontrar el héroe ' + id);
    }
  });
};
