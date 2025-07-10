import { render, screen, act } from '@testing-library/react';
import { AuthProvider, useAuth } from '../../../src/auth/context/AuthContext';
import React from 'react';

// Componente consumidor del contexto para pruebas
function AuthConsumer() {
  const { isAuthenticated, user, login, logout } = useAuth();
  return (
    <div>
      <span data-testid="auth">{isAuthenticated ? 'true' : 'false'}</span>
      <span data-testid="user">{user ? user.name : ''}</span>
      <button onClick={() => login({ name: 'TestUser', email: 'test@mail.com' })}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

describe('Test para AuthContext.test.js', () => {

  beforeEach(() => {
    localStorage.clear();
  });

  test('debe de retornar el estado por defecto', () => {
    render(
      <AuthProvider>
        <AuthConsumer />
      </AuthProvider>
    );
    expect(screen.getByTestId('auth').textContent).toBe('false');
    expect(screen.getByTestId('user').textContent).toBe('');
  });

  test('debe de (login) llamar el login autenticar y establecer el user', async () => {
    render(
      <AuthProvider>
        <AuthConsumer />
      </AuthProvider>
    );
    await act(async () => {
      screen.getByText('Login').click();
    });
    expect(screen.getByTestId('auth').textContent).toBe('true');
    expect(screen.getByTestId('user').textContent).toBe('TestUser');
    expect(JSON.parse(localStorage.getItem('user')).name).toBe('TestUser');
  });

  test('debe de (logout) borrar el name del usuario y logged en false', async () => {
    render(
      <AuthProvider>
        <AuthConsumer />
      </AuthProvider>
    );
    // Primero login
    await act(async () => {
      screen.getByText('Login').click();
    });
    // Ahora logout
    await act(async () => {
      screen.getByText('Logout').click();
    });
    expect(screen.getByTestId('auth').textContent).toBe('false');
    expect(screen.getByTestId('user').textContent).toBe('');
    expect(localStorage.getItem('user')).toBe(null);
  });

});

module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};