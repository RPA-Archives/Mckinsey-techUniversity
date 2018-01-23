module.exports = function average (...argument) {
  if(!argument.length){
    return ;
  }
  let result = 0;
  argument.forEach((value) => result += value);
  return result / argument.length;
};
