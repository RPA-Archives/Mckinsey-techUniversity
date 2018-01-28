const fs = require('fs');

const getLines = (fileName) => {
  const content = fs.readFileSync(fileName);
  return content.toString().split('\n').length - 1;
};

// console.log(getLines(process.argv[2]));
module.exports = getLines;
