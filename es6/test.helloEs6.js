const fn = require('./helloEs6.js');

test('should pass basic test case', function () {
  expect(fn()).toBe('HELLO ES6');
});
