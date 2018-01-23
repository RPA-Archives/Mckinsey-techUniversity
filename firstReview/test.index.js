const importObject = require('./index.js');

const validateInput = importObject.validateInput;
const bowling = importObject.bowling;

describe('For Testing valid input', () => {
  test('SHould pass valid test case', () => {
    expect(validateInput([10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(true);
  });

  test('Should pass the test with invalid input', () => {
    expect(validateInput([10, 10])).toBe(false);
  });

  test('Should pass the test of undefined as input', () => {
    expect(validateInput([9, 3, 5, 6, 7, undefined, 10])).toBe(false);
  });

  test('Should pass the test of null as input', () => {
    expect(validateInput([10, null, 6, 2, 3, 7, 10, 10, 10, 10])).toBe(false);
  });

  test('Should pass the test for values > 10', () => {
    expect(validateInput([10, 12, 2, 3, 7, 10, 10, 10, 10, 10])).toBe(false);
  });

  test('Should pass the test for impossible values input such as 6,7 as pair', () => {
    expect(validateInput([6, 3, 6, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(false);
  });
});

describe('For Testing Bowling Function', () => {
  test('Should pass valid test case', () => {
    expect(bowling([10, 5, 5, 5, 4])).toBe(44);
  });

  test('Should pass all strike test case', () => {
    expect(bowling([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(300);
  });
});
