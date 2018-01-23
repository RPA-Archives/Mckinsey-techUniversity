function html (stringArray, ...substitute) {
  let replacedS = stringArray[0];
  for (let index = 0; index < substitute.length; index++) {
    replacedS += escape(substitute[index]) + stringArray[index + 1];
  }
  return replacedS;
}

function escape (s) {
  return s.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;');
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
