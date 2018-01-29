const fs = require('fs');

const getLines = (inputFile, callBackFunction) => {
  fs.readFile(inputFile, 'utf-8', (err, content1) => callBackFunction(content1.split('\n').length - 1));
};

getLines(process.argv[2], console.log);
module.exports = getLines;
