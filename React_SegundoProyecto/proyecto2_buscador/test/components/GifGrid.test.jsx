import { render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid.jsx";

describe("prueba para <GifGrid.jsx>", () => {
  const category = "goku";

  test("la prueba debe de mostrar el loading inicialmente", () => {
    render(<GifGrid categoria={category} />);
    expect(screen.getByText("Cargando personajes...")).toBeTruthy();
  });

  test("debe coincidir con el snapshot inicial", () => {
    const { container } = render(<GifGrid categoria={category} />);
    expect(container).toMatchSnapshot();
  });
});

describe("prueba para <GifGrid.jsx> con gifs cargados", () => {
  const category = "goku";

  beforeAll(() => {
    jest.resetModules();
    jest.doMock("../../src/hooks/UseFetchGifs", () => ({
      useFetchGifs: () => ({
        characters: [
          { id: "1", name: "Goku", image: "https://dragonball-api.com/characters/goku_normal.webp", race: "Saiyan", ki: "60.000.000", maxKi: "90 Septillion" },
          { id: "2", name: "Vegeta", image: "https://dragonball-api.com/characters/vegeta_normal.webp", race: "Saiyan", ki: "50.000.000", maxKi: "80 Septillion" },
        ],
        loading: false,
      }),
    }));
  });

  afterAll(() => {
    jest.resetModules();
  });

  test("debe de mostrar items cuando se cargan los gifs", () => {
    const { default: GifGridMocked } = require("../../src/components/GifGrid.jsx");
    render(<GifGridMocked categoria={category} />);
    expect(screen.queryByText("Cargando personajes...")).toBeNull();
    expect(screen.getByText("Goku")).toBeTruthy();
    expect(screen.getByText("Vegeta")).toBeTruthy();
    expect(screen.getByAltText("Goku")).toHaveAttribute("src", "https://dragonball-api.com/characters/goku_normal.webp");
    expect(screen.getByAltText("Vegeta")).toHaveAttribute("src", "https://dragonball-api.com/characters/vegeta_normal.webp");
  });

  test("debe de mostrar error si falta una prop importante", () => {
    const { default: GifGridMocked } = require("../../src/components/GifGrid.jsx");
    // Dejamos a Vegeta sin la prop 'race'
    const brokenCharacters = [
      { id: "1", name: "Goku", image: "https://dragonball-api.com/characters/goku_normal.webp", race: "Saiyan", ki: "60.000.000", maxKi: "90 Septillion" },
      { id: "2", name: "Vegeta", image: "https://dragonball-api.com/characters/vegeta_normal.webp", ki: "50.000.000", maxKi: "80 Septillion" }, // falta 'race'
    ];
    jest.doMock("../../src/hooks/UseFetchGifs", () => ({
      useFetchGifs: () => ({
        characters: brokenCharacters,
        loading: false,
      }),
    }));
    // Reimportamos el componente para que use el mock actualizado
    const { default: GifGridBroken } = require("../../src/components/GifGrid.jsx");
    render(<GifGridBroken categoria={category} />);
    expect(screen.getByText("Goku")).toBeTruthy();
    expect(screen.getByText("Vegeta")).toBeTruthy();
    // Goku sí tiene 'race'
    expect(screen.getByText("Saiyan")).toBeTruthy();
    // Vegeta no tiene 'race', así que no debería aparecer su raza
    // Solo debe aparecer una vez el texto 'Saiyan' (el de Goku)
    const allRace = screen.getAllByText("Saiyan");
    expect(allRace.length).toBe(1);
  });
});