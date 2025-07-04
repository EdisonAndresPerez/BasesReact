import { retornarArreglo } from '../../src/bases/test03Desestructuracion';

describe("Prueba test03Desestructuracion.test de arreglos", () => {
  test("retornarArreglo debe retornar una lista que tenga un string y un número", () => {
    const [letras, numeros] = retornarArreglo();

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");

    console.log(letras);  // ABC
    console.log(numeros); // 123
  });
});
