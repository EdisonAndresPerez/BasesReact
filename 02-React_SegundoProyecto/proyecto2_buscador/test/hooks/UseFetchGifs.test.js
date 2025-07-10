import { renderHook } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/UseFetchGifs';
import { waitFor } from '@testing-library/react';

describe('pruebas en <useFetchGifs>', () => {
  test('debe regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('Goku'));
    expect(result.current.characters).toEqual([]);
    expect(result.current.loading).toBe(true);
  });

 
  test('debe regresar el estado characters y loading en false ', async () => {
    const { result } = renderHook(() => useFetchGifs('Goku'));

    await waitFor(
      () => expect(result.current.characters.length).toBeGreaterThan(0),
      { timeout: 1000 })


    expect(result.current.characters).toEqual([]);
    expect(result.current.loading).toBe(true);
  });
});
