const bowling = (inputArray) => {
  validateInput(inputArray);
  // inputArray.reduce((AccumilatedScore, eachRoll) => {
  //   if(each)
  // })
};

const validateInput = (inputArray) => {
  if (inputArray.length < 10 || inputArray.length > 21) {
    return false;
  }
  const particalResult = inputArray.every((value) => {
    if (value < 11 && value > -1 && value !== null) {
      return true;
    }
    return false;
  });
  return particalResult && wrongWayToCalculate(inputArray);
};

const wrongWayToCalculate = (inputArray) => {
  let i = 0;
  for (; i < inputArray.length; i += 1) {
    if (inputArray[i] === 10) {
      continue;
    } else if (inputArray[i] + inputArray[i + 1] > 11) {
      return false;
    } else {
      i += 1;
    }
  }
  return true;
};
module.exports = validateInput;
