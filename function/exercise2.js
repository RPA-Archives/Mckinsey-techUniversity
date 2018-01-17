let counter = 0
function repeat (inputFunction, noOfRepeat) {
  if (noOfRepeat === 0) {
    return counter
  } else if (noOfRepeat > 0) {
    inputFunction()
    return repeat(inputFunction, --noOfRepeat)
  } else {
    return null
  }
}

function incCount () {
  counter++
}

console.log('Should pass the basic test case: ', repeat(incCount, 4) === 4)
counter = 0
console.log('Should pass the base test case: ', repeat(incCount, 0) === 0)
counter = 0
console.log('Should pass the fail test case: ', repeat(incCount, -4) === null)
module.exports = repeat
