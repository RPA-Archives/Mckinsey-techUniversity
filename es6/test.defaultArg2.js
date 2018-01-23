const makeImportant = require('./defaultArg2.js');

test('should add length equal ! to hi', function () {
  expect(makeImportant('hi')).toBe('hi!!');
});
test('should add 5 ! to hi', function () {
  expect(makeImportant('hi', 5)).toBe('hi!!!!!');
});
test('should return null string', function () {
  expect(makeImportant('')).toBe('');
});
test('should return 5 ! string', function () {
  expect(makeImportant('', 5)).toBe('!!!!!');
});
