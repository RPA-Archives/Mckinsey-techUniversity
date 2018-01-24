const callAndApply = require('./callAndApply.js');

function driverFunction(name, age, tshirt) {
  this.name = name;
  this.age = age;
  this.TshirtSize = tshirt;
}

describe('should pass caller and applier function', () => {
  let testObject = {};
  callAndApply.caller(testObject, driverFunction, 'abcd', 1, 'S');

  test('caller function return object of length 3', () => {
    expect(Object.keys(testObject).length).toBe(3);
  });
  test('caller funtion should return object as {`abcd`,1,`s`}', () => {
    expect(testObject.name).toBe('abcd');
    expect(testObject.age).toBe(1);
    expect(testObject.TshirtSize).toBe('S');
    expect(testObject.someThingElse).toBe(undefined);
  });
});
