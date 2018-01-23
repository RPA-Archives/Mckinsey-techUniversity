const wrongWayToCalculate = (inputArray) => {
  for (let i = 0; i < inputArray.length; i += 1) {
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
const calculateSum = (firstNum, SecondNum) => firstNum + SecondNum;

const bowling = (inputArray) => {
  validateInput(inputArray);
  let counter = 0;
  let binding = null;
  return inputArray.reduce((AccumilatedScore, eachRoll) => {
    // console.log(eachRoll, AccumilatedScore);
    let eachSum = 0;
    if (counter) {
      eachSum = eachRoll;
      counter -= 1;
    }
    if (eachRoll === 10) {
      counter += 2;
      eachSum += 10;
      // console.log('got one strike');
    } else if (binding === null) {
      binding = calculateSum.bind(null, eachRoll);
      // console.log('Called Bind', binding);
    } else {
      const resultedSum = binding(eachRoll);
      // console.log('binded sum', resultedSum);
      if (resultedSum === 10) {
        // console.log('got one spare');
        counter += 1;
      }
      // console.log('got one normal');
      eachSum += resultedSum;
      binding = null;
    }
    return AccumilatedScore + eachSum;
  }), 0;
};
module.exports = {
  bowling,
  validateInput,
};
