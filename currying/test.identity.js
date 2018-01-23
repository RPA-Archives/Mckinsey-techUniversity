const identity = require('./identity.js');

describe('Testing Identity function', () => {
  test('Should return same argument', () => {
    expect(identity(1)).toBe(1);
  });

  test('Should return same argument type', () => {
    expect(typeof identity(1)).toBe('number');
  });

  test('Should return null for null argument', () => {
    expect(identity(null)).toBe(null);
  });

  test('Should return undefined', () => {
    expect(identity()).toBe(undefined);
  });

  test('Should return string for string argument', () => {
    expect(identity('kuchBhi')).toBe('kuchBhi');
  });

  test('Should return undefined for undefined argument', () => {
    expect(identity(undefined)).toBe(undefined);
  });
});
