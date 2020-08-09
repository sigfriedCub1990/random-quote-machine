import getPseudoRandomNumber from '../getRandomNumber';

describe('Pseudo random number generator tests', () => {
  test('Should generate number within range', () => {
    const result = getPseudoRandomNumber(10);

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(10);
  });
});
