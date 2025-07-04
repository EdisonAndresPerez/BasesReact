
import { getHeroeByAsync } from "../../src/bases/test05promesas";

describe("prueba en test05promesas.test", () => {
  test("getHeroeByAsync debe de retornar un heroe por ID", (done) => {
    const id = 1;

    getHeroeByAsync(id).then((hero) => {
      expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
      done(); // 👈 importante: notificar que ya terminó
    });
  });

  test("getHeroeByAsync debe de retornar un error", (done) => {
    const id = 98;

    getHeroeByAsync(id).catch((error) => {
       console.log("error recibido:", error);
      expect(error).toBe('No se pudo encontrar el héroe '+ id)
      done();
    });
  });
});
