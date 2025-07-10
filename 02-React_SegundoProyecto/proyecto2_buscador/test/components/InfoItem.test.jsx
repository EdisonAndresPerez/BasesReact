import { render } from "@testing-library/react";
import { InfoItem } from "../../src/components/InfoItem";

describe("test para infoItem.jsx", () => {
  test("la prueba debe retornar error: falta las props name, race y ki", () => {
    const character = {
      id: 1,
      name: "Goku",
      ki: "60.000.000",
      maxKi: "90 Septillion",
      race: "Saiyan",
      image: "https://dragonball-api.com/characters/goku_normal.webp",
    };

    const { container } = render(<InfoItem {...character} />);
    expect(container).toMatchSnapshot();
  });
});
