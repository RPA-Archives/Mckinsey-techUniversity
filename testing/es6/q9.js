function makeImportant (msg, length = msg.length) {
  return msg + '!'.repeat(length);
}
module.exports = makeImportant;
// makeImportant('hi', 5)
