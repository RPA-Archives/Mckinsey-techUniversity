function doubleAll (inputArray) {
  return inputArray.map(function (number) {
    return number * 2
  })
}

function checkLength (inputArray) {
  return inputArray.length
}

function checkEqual (inputArray1, inputArray2) {
  if (checkLength(inputArray1) !== checkLength(inputArray2)) {
    return false
  } else {
    for (let i = 0; i <= inputArray1.length; i++) {
      if (inputArray1[i] !== inputArray2[i]) {
        return false
      }
    }
    return true
  }
}
let number = [1, 2, 3]
module.exports = doubleAll
console.log('should pass the basic test case: ', checkEqual(doubleAll(number), [2, 4, 6]) === true)
console.log('should pass the fail test case: ', checkEqual(doubleAll(number), [1, 4, 6]) === false)

// testing checkEqual function
console.log('should pass the fail test case of checkEqual: ', checkEqual([1, 4, 6], [1, 4, 6]) === true)
console.log('should pass the fail test case of checkEqual: ', checkEqual([1, 4, 6], [1, 6, 6]) === false)
console.log('should pass the fail test case of checkEqual: ', checkEqual([1, 4, 6], [1, 4]) === false)

// testing checklength function
console.log('should pass the basic test case of checkLength: ', checkLength([1, 4, 6]) === 3)
console.log('should pass the fail test case of checkLength: ', checkLength([1, 4]) !== 3)
console.log('should pass the ideal test case of checkLength: ', checkLength([]) === 0)
