function mapreduce (multiArgument) {
  let result = multiArgument.map(eachArgument => eachArgument[0])
    .reduce((resultStr, eachArgument) => resultStr + eachArgument);
  return `[${multiArgument}] becomes "${result}"`;
}
console.log(mapreduce(process.argv.slice(2)));
module.exports = mapreduce;
