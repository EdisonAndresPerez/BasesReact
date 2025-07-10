import { TextEncoder, TextDecoder } from 'util';
import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';

// Mock del contexto de autenticación
jest.mock('../../src/auth/context/AuthContext', () => ({
  useAuth: () => ({
    isAuthenticated: false,
  }),
}));

describe("Pruebas en PublicRoute", () => {

  test("debe de mostrar el children si NO está autenticado", () => {
    render(
      <PublicRoute>
        <h1>Ruta pública</h1>
      </PublicRoute>
    );
    expect(screen.getByText('Ruta pública')).toBeTruthy();
  });

});
