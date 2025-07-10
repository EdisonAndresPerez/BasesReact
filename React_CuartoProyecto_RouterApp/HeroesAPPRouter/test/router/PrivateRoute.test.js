import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '../../src/router/PrivateRoute';

// Mock useAuth
jest.mock('../../src/auth/context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

const { useAuth } = require('../../src/auth/context/AuthContext');

describe('PrivateRoute', () => {
  test('debe mostrar el contenido si el usuario está autenticado', () => {
    useAuth.mockReturnValue({ user: { name: 'Test User' } });

    const { getByText } = render(
      <MemoryRouter initialEntries={['/protected']}>
        <Routes>
          <Route
            path="/protected"
            element={
              <PrivateRoute>
                <h1>Ruta protegida</h1>
              </PrivateRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(getByText('Ruta protegida')).toBeInTheDocument();
  });

  test('debe redirigir a /login si el usuario NO está autenticado', () => {
    useAuth.mockReturnValue({ user: null });

    const { container } = render(
      <MemoryRouter initialEntries={['/protected']}>
        <Routes>
          <Route
            path="/protected"
            element={
              <PrivateRoute>
                <h1>Ruta protegida</h1>
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<h1>Página de Login</h1>} />
        </Routes>
      </MemoryRouter>
    );

    // Verifica que se renderiza la página de login
    expect(container.textContent).toBe('Página de Login');
  });
});