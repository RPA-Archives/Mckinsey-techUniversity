const helloWorld = require('./helloworld.js');

test('should return HELLO WORLD to the console', () => {
  expect(helloWorld()).toBe('HELLO WORLD');
});
