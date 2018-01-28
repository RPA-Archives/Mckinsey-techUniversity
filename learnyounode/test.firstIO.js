const getLines = require('./firstIO.js');

const inputFile1 = './emptyFile.txt';
const inputFile2 = './normalFile.txt';
const inputFile3 = './normalFilewithNewline.txt';
describe('test for first IO', () => {
  test('should return an integer', () => {
    expect(typeof getLines(inputFile1)).toBe('number');
  });

  test('should return zero for empty file', () => {
    expect(getLines(inputFile1)).toBe(0);
  });

  test('should return lines for a normal file', () => {
    expect(getLines(inputFile2)).toBe(4);
  });

  test('should return lines for a normal file with chained newline', () => {
    expect(getLines(inputFile3)).toBe(6);
  });
});
