const greet = require('./que3.js');

test('Should print ', function () {
  expect(greet('Ram')).toBe(`Hello, Ram!
Your name lowercased is "ram".`);
});
test('Should print empty stirng ', function () {
  expect(greet('')).toBe(`Hello, !
Your name lowercased is "".`);
});
