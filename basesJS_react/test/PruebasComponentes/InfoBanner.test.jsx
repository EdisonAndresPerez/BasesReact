import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import InfoBanner from "../../src/components/infoBanner/InfoBanner";

describe("Pruebas para <InfoBanner />", () => {
  test("debe hacer match con el snapshot", () => {
    const { container } = render(
      <InfoBanner 
        titulo="informacion"
        subTitulo="subinformacion"
        nombre="probando props"
      />
    );

    expect(container).toMatchSnapshot();
  });

  test("debe renderizar los textos correctamente", () => {
    render(
      <InfoBanner 
        titulo="informacion"
        subTitulo="subinformacion"
        nombre="probando props"
      />
    );

    expect(screen.getByText("informacion")).toBeInTheDocument();
    expect(screen.getByText("subinformacion")).toBeInTheDocument();
    expect(screen.getByText("probando props")).toBeInTheDocument();
  });
});
