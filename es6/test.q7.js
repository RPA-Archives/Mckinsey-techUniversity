const average = require('./q7.js');

test('should give average of 1, 5 as 3', function () {
  expect(average(1, 5)).toBe(3);
});
test('should give average of -1, -5 as -3', function () {
  expect(average(-1, -5)).toBe(-3);
});
test('should give average of -1, 5 as 2', function () {
  expect(average(-1, 5)).toBe(2);
});
test('should give average of 1.1, 5.9 as 3.5', function () {
  expect(average(1.1, 5.9)).toBe(3.5);
});
test('should give average of 1.1, 5.9 as 3.5', function () {
  expect(average()).toBe(undefined);
});
