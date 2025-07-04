import { getUsuarioActivo } from '../../src/bases/testFunciones02';

describe("prueba testFunciones02.test", () => {
  test("getUsuarioActivo debe retornar un objeto con datos esperados", () => {
    const usuario = getUsuarioActivo();

    const usuarioEsperado = {
      id: 1234,
      usuarioNombre: "juanXD12",
      correo: "juan@gmail.com",
      estado: "activo",
    };
    expect(usuario).toEqual(usuarioEsperado);
  });
});
