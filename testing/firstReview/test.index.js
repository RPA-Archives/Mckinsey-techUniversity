const validateInput1 = require('./index.js');

// const validateInput1 = exportsObject.validateInput;


describe('For Testing valid input', () => {
  test('SHould pass valid test case', () => {
    expect(validateInput1([10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(true);
  });

  test('Should pass the test with invalid input', () => {
    expect(validateInput1([10, 10])).toBe(false);
  });

  test('Should pass the test of undefined as input', () => {
    expect(validateInput1([9, 3, 5, 6, 7, undefined, 10])).toBe(false);
  });

  test('Should pass the test of null as input', () => {
    expect(validateInput1([10, null, 6, 2, 3, 7, 10, 10, 10, 10])).toBe(false);
  });

  test('Should pass the test for values > 10', () => {
    expect(validateInput1([10, null, 12, 2, 3, 7, 10, 10, 10, 10])).toBe(false);
  });

  test('Should pass the test for impossible values input', () => {
    expect(validateInput1([6, 3, 6, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(false);
  });
});
