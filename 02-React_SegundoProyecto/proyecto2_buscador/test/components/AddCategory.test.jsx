import AddCategory from "../../src/components/AddCategory";
import { render, screen, fireEvent } from "@testing-library/react";

describe("prueba para <AddCategory,jsx>", () => {
  test("debe de llamar onNewCategoria si el input tiene un valor", () => {
    //crear el valor que yo voy a evular
    const inputValue = "Goku";
    const onNewCategoria = jest.fn(); // mock
    //el renderizado de pruebas
    const { container } = render(
      <AddCategory onNewCategoria={onNewCategoria} />
    );
    const input = screen.getByRole("textbox");
    const form = container.querySelector("form");

    // Simula escribir en el input
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(onNewCategoria).toHaveBeenCalled(); // se llamó
    expect(onNewCategoria).toHaveBeenCalledWith(inputValue); // se llamó con "Goku"
    //screen.debug()
    expect(input.value).toBe("");
  });

  test("NO debe llamar a onNewCategoria si el input está vacío", () => {
    const onNewCategoria = jest.fn();
    const { container } = render(
      <AddCategory onNewCategoria={onNewCategoria} />
    );
    const form = container.querySelector("form");

    fireEvent.submit(form);

    expect(onNewCategoria).not.toHaveBeenCalled();
  });
});
