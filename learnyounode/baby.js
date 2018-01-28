const getSum = (inputArray) => {
  let result = 0;
  if (inputArray === undefined) return result;
  inputArray.forEach((element) => {
    result += Number(element);
  });
  return result;
};

const args = process.argv.slice(2);
console.log(getSum(args));

module.exports = getSum;
