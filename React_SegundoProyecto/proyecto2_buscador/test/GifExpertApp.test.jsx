import { render, screen } from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  test('debe renderizar el título y el input', () => {
    render(<GifExpertApp />);
    expect(screen.getByText('Dragon Ball Characters')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });

  test('debe renderizar una categoría por defecto', () => {
    render(<GifExpertApp />);
    // Verifica que el GifGrid de "Goku" se renderiza
    expect(screen.getByText('Cargando personajes...')).toBeTruthy();
    // O si tienes un título en GifGrid, podrías buscarlo así:
    // expect(screen.getByText('Goku')).toBeTruthy();
  });
});
