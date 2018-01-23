const sum = require('./index.js')

test('Should add two numbers ', function () {
  expect(sum(2, 5)).toBe(7)
})
