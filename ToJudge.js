
const window = require('./WindowPrompt.js');

var a, b, c, d;


a = window.prompt('mim de texto');
b = Number(window.prompt('mim de numero'));
window.alert(a);
c = Number(window.prompt('mim de numero outro'));
d = b + c;
window.alert(b);
window.alert(c);
window.alert(d);
