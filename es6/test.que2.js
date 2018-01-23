const greet = require('./que2.js');
// console.log(greet('prasad'))
test('Should print simple stirng ', function () {
  expect(greet('Ram')).toBe(`Hello, Ram!
Your name lowercased is "ram".`);
});
test('Should print empty stirng ', function () {
  expect(greet('')).toBe(`Hello, !
Your name lowercased is "".`);
});
