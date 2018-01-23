const midpoint = require('./defaultArg1.js');

test('should give average of 1, 5 as 3', function () {
  expect(midpoint(1, 5)).toBe(3);
});
test('should give average of nthng as 0.5', function () {
  expect(midpoint()).toBe(0.5);
});
test('should give average of 1, nthng as 1', function () {
  expect(midpoint(1)).toBe(1);
});
test('should give average of nthng, 5 as 2.5', function () {
  expect(midpoint(undefined, 5)).toBe(2.5);
});
test('should give average of nthng, 5 as 2.5', function () {
  expect(midpoint(undefined, undefined)).toBe(0.5);
});
