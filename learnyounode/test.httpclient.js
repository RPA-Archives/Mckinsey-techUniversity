const request = require('./httpclient.js');

describe('for valid test cases', () => {
  test('should return result', (done) => {
    const call = (data) => {
      expect(data).toBe('Ok');
      done();
    };
    request('http://www.google.com', call);
  });

  test('should return error if wrong', (done) => {
    const call = (data) => {
      expect(data).toBe('Error');
      done();
    };
    request('http://kuchnihai.com', call);
  });
});
