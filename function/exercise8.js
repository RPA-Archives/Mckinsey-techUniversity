function duckCount () {
  let argumentArray = Array.from(arguments)
  return argumentArray.reduce(function (intial, eachArgument) {
    if (eachArgument.hasOwnProperty('quack') || Object.prototype.hasOwnProperty.call(eachArgument, 'quack') {
      return intial + 1
    } else {
      return intial
    }
  }, 0)
}

let testObject1 = {quack: true}
let testObject2 = Object.create({quack: true})
let testObject3 = {somethingElse: true}
let testObject4 = {
  pig: {
    quack: true
  }
}
console.log('shoudl pass the basic test case: ', duckCount(testObject1) === 1)
console.log('shoudl pass the basic test case: ', duckCount(testObject1, testObject2) === 1)
console.log('shoudl pass the basic test case: ', duckCount(testObject1, testObject2, testObject3) === 1)
console.log('shoudl pass the basic test case: ', duckCount(testObject1, testObject2, testObject3, testObject4) === 1)

module.exports = duckCount
