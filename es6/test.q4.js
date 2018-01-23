const fn = require('./q4.js');

test('the result should be ouch', () => {
 expect(console.log(fn.kick('ouch'))).toBe('ouch');
});
