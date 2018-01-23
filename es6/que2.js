function greet(name) {
  console.log(`Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`);
  return `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`;
}
greet(process.argv[2]);
module.exports = greet;
