function logger (namespace) {
  return console.log.bind(this, namespace)
}

let testObject1 = logger('Hello')
testObject1('World')
let testObject2 = logger('')
testObject2('World')
let testObject3 = logger('Hello')
testObject3('')
let testObject4 = logger('Hello', 'there')
testObject4('World', 'there1')
