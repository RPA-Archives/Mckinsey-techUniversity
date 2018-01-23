const delayInnvo = require('./delayInnvo.js');

describe('test for return type', () => {
  test('delay should return a function', () => {
    expect(typeof delayInnvo(2)).toBe('function');
  });

  test('second function should return number', () => {
    expect(typeof delayInnvo(2)(3)).toBe('number');
  });
});

describe('test for correct output', () => {
  test('for both valid input should give correct output', () => {
    expect(delayInnvo(2)(3)).toBe(5);
  });

  test('should give correct output for only one argument', () => {
    expect(delayInnvo(2)()).toBe(2);
  });

  test('should give correct output for negative argument', () => {
    expect(delayInnvo(2)(-4)).toBe(-2);
  });
});
