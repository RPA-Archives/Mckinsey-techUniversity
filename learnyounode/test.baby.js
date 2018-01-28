const getSum = require('./baby.js');

test('should return number', () => {
  expect(typeof getSum([0, 0])).toBe('number');
});

test('should return the sum 4 numbers', () => {
  expect(getSum([0, 1, 2, 3])).toBe(6);
});

test('should return 0 for invalid input', () => {
  expect(getSum()).toBe(0);
});
