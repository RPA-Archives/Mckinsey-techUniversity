function getShortMessages (inputObject) {
  let filteredObject = inputObject.filter(function (eachObject) {
    return checkMessageLength(eachObject)
  })
  let resultObject = filteredObject.map(function (eachObject) {
    return eachObject.message
  })
  return resultObject
}

function checkMessageLength (object) {
  return object.message.length < 50
}

function checkOutput (object) {
  for (let index = 0; index < object.length; index++) {
    if (object[index].length > 50) {
      return false
    }
  }
  return true
}
let messages = [
  {
    message: 'hello world!'
  },
  {
    message: 'hello world! hello world!'
  },
  {
    message: 'hello world! hello world! hello world!'
  },
  {
    message: 'hello world! hello world! hello world! hello world!'
  },
  {
    message: 'hello world! hello world! hello world! hello world! hello world!'
  }
]
console.log('Should pass the basic test case: ', checkOutput(getShortMessages(messages)) === true)

// testing checkMessageLength
console.log('Should pass the basic length case:', checkMessageLength({ message: 'Hello' }) === true)
console.log('Should pass the fail length case:', checkMessageLength({message: 'HelloHellosjdhfgjkdfgajkhdgvjkahsdgfkjhfgjdhgfjsdhvgjelkrfghfg'}) === false)

module.exports = getShortMessages
