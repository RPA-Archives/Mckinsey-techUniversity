const spread = require('./q6.js');

test('spread should return a number', () => {
  expect(typeof spread([1, 4])).toBe('number');
});
test('should provide min of 1,4 as 1', () => {
  expect(spread([1, 4, 6, 8])).toBe(1);
});
