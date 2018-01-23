const importObject = require('./binary.js');

const { binary } = importObject;
const { verify } = importObject;

describe('Test for Binary function', () => {
  test('Should return sum of two positive numbers', () => {
    expect(binary(2, 3)).toBe(5);
  });
  test('Should pass for one argument', () => {
    expect(binary(2)).toBe(null);
  });
  test('Should pass for no argument', () => {
    expect(binary()).toBe(null);
  });
});

describe('Test for verify function', () => {
  test('Should pass for correct number', () => {
    expect(verify(2)).toBe(true);
  });
  test('Should pass for undefined', () => {
    expect(verify(undefined)).toBe(false);
  });
  test('Should pass for null', () => {
    expect(verify(null)).toBe(false);
  });
  test('Should pass for Infinity', () => {
    expect(verify(Infinity)).toBe(false);
  });
  test('Should pass for zero', () => {
    expect(verify(0)).toBe(true);
  });
});
