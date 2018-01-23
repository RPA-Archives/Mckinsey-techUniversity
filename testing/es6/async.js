function bingo () {
  let users = []
  for (let i = 0; i < 5; i++) {
    users.push(setTimeout(() => {
      fn.bind(users, 1)
    }))
  }
  return users
}
function fn (value) {
  console.log(1)
}
console.log(bingo())
