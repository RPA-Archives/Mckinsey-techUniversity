const verify = (number) => {
  if (number < Infinity && number > -Infinity && number !== null) {
    return true;
  }
  return false;
};
const binary = (firstNum, secondNum) => {
  if (verify(firstNum) && verify(secondNum)) {
    return firstNum + secondNum;
  }
  return null;
};

// module.exports = binary;
module.exports = {
  binary,
  verify,
};
