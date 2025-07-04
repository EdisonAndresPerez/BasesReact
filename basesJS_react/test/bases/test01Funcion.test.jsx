/* eslint-env jest */
// test/bases/02-templateString.test.jsx
import { getSaludar } from '../../src/bases/testFuncion01';

describe('prueba testFuncion01.test', () => {
  test('getSaludo debe retornar "hola maria "', () => {
    const nombre = "andres";
    const saludo = getSaludar(nombre);

    expect(saludo).toBe("hola maria");
  });
});
