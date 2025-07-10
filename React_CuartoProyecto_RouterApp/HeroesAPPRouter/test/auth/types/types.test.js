import { types } from '../../../src/auth/types/types';

describe('Pruebas en types.js', () => {
  test('debe tener los types correctos', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    });
  });

  test('type login debe ser "[Auth] Login"', () => {
    expect(types.login).toBe('[Auth] Login');
  });

  test('type logout debe ser "[Auth] Logout"', () => {
    expect(types.logout).toBe('[Auth] Logout');


});
  }); 