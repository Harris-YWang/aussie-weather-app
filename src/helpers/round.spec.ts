import round from './round';

describe('round', () => {
  test('round backwards', () => {
    const result = round(26.83);
    expect(result).toBe(26.8);
  });

  test('round upwards', () => {
    const result = round(23.89);
    expect(result).toBe(23.9);
  });
});
