const fn = require('./destructuring.js');

test("The expected value is { username: Ram, email: example@someone.com }", () => {
  expect(fn(['Abcd', 'Ram', 'example@someone.com', '23', 'Ram', 'Prasad'])).toBe({ username: 'Ram', email: 'example@someone.com' });
});

test('should pass empty array', () => {
  expect(fn([])).toBe({});
});

test('shoudl fail wrong data', () => {
  expect(fn(['abcd', 'Ram'])).toBe({});
});
