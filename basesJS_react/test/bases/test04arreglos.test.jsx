import { getHeroesByID, getHeroesByOwner } from "../../src/bases/08-importaciones";

describe("Prueba test04Arreglos.tst ", () => {
  test("getHeroesByID debe retornar el id del heroe", () => {
    const id = 1;
    const hero = getHeroesByID(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });


  test("getHeroesByOwner debe retornar el owner del hero", () => {
    const owner = "DC"
    const heroes = getHeroesByOwner(owner)

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
         {
      id: 1,
      name: 'Batman',
      owner: 'DC'
    },
    {
      id: 3,
      name: 'Superman',
      owner: 'DC'
    },
    {
      id: 4,
      name: 'Flash',
      owner: 'DC'
    }
  ]);
});
}); 
