import AddCategory from "../../src/components/AddCategory";
import { render, screen, fireEvent } from "@testing-library/react";

describe("prueba para <AddCategory,jsx>", () => {
    test("debe de llamar onNewCategoria si el input tiene un valor", () => {

        //crear el valor que yo voy a evular
        const inputValue = 'Goku'
        //el renderizado de pruebas
        render(<AddCategory onNewCategoria={() => {} } />);
        //agarro la referencia del input al form
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        // Simula escribir en el input
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form)
        //screen.debug()
        expect(input.value).toBe('')
    })
})