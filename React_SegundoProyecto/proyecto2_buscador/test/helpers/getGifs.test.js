import { getGifs } from "../../src/helpers/getGifs";

// Mock global fetch
global.fetch = jest.fn();

describe("prueba para helpers <getGifs.js>", () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  test("Debe de retonar un array de personas con las propiedades correctas", async () => {
    const mockApiResponse = [
      {
        id: 1,
        name: "Goku",
        ki: "60.000.000",
        maxKi: "90 Septillion",
        race: "Saiyan",
        image: "https://dragonball-api.com/characters/goku_normal.webp",
      },
    ];

    fetch.mockResolvedValueOnce({
      json: async () => mockApiResponse,
    });

    const gifs = await getGifs("goku");

    console.log(gifs);

    expect(fetch).toHaveBeenCalled();
    expect(Array.isArray(gifs)).toBe(true);
    expect(gifs.length).toBe(1);
    expect(gifs[0]).toEqual({
      id: 1,
      name: "vegeta",
      ki: "60.000.000",
      maxKi: "90 Septillion",
      race: "human",
      image: "https://dragonball-api.com/characters/goku_normal.webp",
    });
  });
});
