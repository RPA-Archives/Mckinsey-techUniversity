const fs = require('fs');

const getFilteredList = (dirName, extension, callbackFunction) => {
  fs.readdir(dirName, (err, list) => {
    const result = list.filter(x => x.includes(`.${extension}`));
    return callbackFunction(result);
  });
};

module.exports = getFilteredList;
const display = inputList => inputList.forEach((element) => {
  console.log(element);
});
getFilteredList(process.argv[2], process.argv[3], display);
