const curryFunction = require('./curryFunction.js');

const testFunction = (first, second, third) => first + second + third;
const curriedFunction = curryFunction(testFunction);
describe('Test for curry function return type', () => {
  test('Should return a function for first call', () => {
    expect(typeof curryFunction(testFunction)).toBe('function');
  });
  test('Should return a function for passing 1 out 3 argument in curried function', () => {
    expect(typeof curriedFunction(20)).toBe('function');
  });
  test('Should return a function for passing 2 out 3 argument in curried function', () => {
    expect(typeof curriedFunction(20, 30)).toBe('function');
  });
  test('Should return a function for passing 3 out 3 argument in curried function', () => {
    expect(typeof curriedFunction(20, 30, 10)).toBe('number');
  });
  test('Should return a function for passing 0 out 3 argument in curried function', () => {
    expect(typeof curriedFunction()).toBe('function');
  });
  test('Should return a function for passing one 2 out 3 argument in curried function recursively', () => {
    expect(typeof curriedFunction(20)(30)).toBe('function');
  });
  test('Should return a function for passing one 3 out 3 argument in curried function recursively', () => {
    expect(typeof curriedFunction(20)(30)(40)).toBe('number');
  });
});

describe('Test for curry function return value', () => {
  test('Should return a function for passing 3 out 3 argument in curried function', () => {
    expect(curriedFunction(20, 30, 10)).toBe(60);
  });
  test('Should return a function for passing one 3 out 3 argument in curried function recursively', () => {
    expect(curriedFunction(20)(30)(40)).toBe(90);
  });
});
