const curryFunction = (inputFunction) => {
  const totalArguments = inputFunction.length;

  return function curriedFunc(...inputArg) {
    if (inputArg.length >= totalArguments) {
      return inputFunction(...inputArg);
    }
    return (...argumentsSecond) => curriedFunc(...inputArg.concat(argumentsSecond));
  };
};

module.exports = curryFunction;
