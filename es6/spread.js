function spread (numbers) {
  return Math.min(...numbers);
}
const input = process.argv.slice(2);
console.log(`The minimum of [${input}] is ${spread(input)}`);
module.exports = spread;
