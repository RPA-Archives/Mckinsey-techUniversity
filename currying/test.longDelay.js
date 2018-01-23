const cummlativeSum = require('./longDelay.js');

describe('test for return type', () => {
  test('should return function when called with argument', () => {
    expect(typeof cummlativeSum(4)).toBe('function');
  });
  test('should return function when called with argument', () => {
    expect(typeof cummlativeSum()).toBe('number');
  });
});

describe('test for valid output', () => {
  cummlativeSum(5);
  cummlativeSum(10);
  cummlativeSum(15);
  test('should return cummulative sum', () => {
    expect(cummlativeSum()).toBe(34);
  });
});
