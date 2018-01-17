function countWords (inputWords) {
  return inputWords.reduce(function (countObject, eachWord) {
    if (eachWord in countObject) {
      countObject[eachWord] += 1
    } else {
      countObject[eachWord] = 1
    }
    return countObject
  }, {})
}

let sampleObject = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
console.log('Should pass the basic test case: ', countWords(sampleObject).toString() === { Apple: 2, Banana: 1, Durian: 3 }.toString())

let sampleObject1 = []
console.log('Should pass the empty test case: ', countWords(sampleObject1).toString() === {}.toString())
module.exports = countWords
