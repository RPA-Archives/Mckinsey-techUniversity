let total = 0;
const cummlativeSum = (num) => {
  if (num === undefined) {
    return total;
  }
  total += num;
  return cummlativeSum;
};
module.exports = cummlativeSum;
