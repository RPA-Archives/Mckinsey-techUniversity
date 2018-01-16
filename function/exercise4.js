function getShortMessages(inputObject){
	// console.log("input object", inputObject)
	let filteredObject = inputObject.filter(function (eachObject) {
		// console.log("each object", eachObject)
		return checkMessageLength(eachObject)
	})
	let resultObject = filteredObject.map(function (eachObject){
		return eachObject.message
	})
	return resultObject
}

function checkMessageLength(object){
	return object.message.length < 50
}

let messages = [
	{
		message: "hello world!"
	},
	{
		message: "hello world! hello world!"
	},
	{
		message: "hello world! hello world! hello world!"
	},
	{
		message: "hello world! hello world! hello world! hello world!"
	},
	{
		message: "hello world! hello world! hello world! hello world! hello world!"
	}
]
// console.log("Should pass the basic test case: ", getShortMessages(messages))

// testing checkMessageLength
// console.log("Should pass the basic length case:", checkMessageLength({ message: "Hello" }) === true)
// console.log("Should pass the fail length case:", checkMessageLength({message: "HelloHellosjdhfgjkdfgajkhdgvjkahsdgfkjhfgjdhgfjsdhvgjelkrfghfg"}) === false)

module.exports = getShortMessages