function reduce (inputArray, fn, initialValue) {
  if (inputArray.length === 0) {
    return initialValue
  } else {
    initialValue = fn(initialValue, inputArray[0])
    return reduce(inputArray.slice(1), fn, initialValue)
  }
}
// function simpleAdd (firstValue, secondValue) {
//   if (firstValue && secondValue) {
//     return firstValue + secondValue
//   } else {
//     return null
//   }
// }

// console.log('should pass the basic test case: ', reduce([1, 2, 3], simpleAdd, 0) === 6)
// console.log('should pass the basic test case with non-zero initialValue: ', reduce([1, 2, 3], simpleAdd, 4) === 10)
// console.log('should pass the ideal test case: ', reduce([], simpleAdd, 0) === 0)
//
// console.log('should pass the basic test case for simpleAdd: ', simpleAdd(2, 7) === 9)
// console.log('should pass the fail test case for simpleAdd: ', simpleAdd() === null)

module.exports = reduce
