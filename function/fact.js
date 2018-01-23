function fact (n, m) {
  if (n === 0 && n === 1) {
    return m
  }
  m = m * n
  console.log('called for value', n, m)
  return function () {
    fact(--n, m)
  }
}

function trampoline (fn) {
  while (typeof fn === 'function') {
    console.log('before', typeof fn)
    fn = fn()
    console.log('after', typeof fn)
    console.log('after', fn)
  }
  // return fn
}

console.log(trampoline(
  function () { fact(10, 1) }))
