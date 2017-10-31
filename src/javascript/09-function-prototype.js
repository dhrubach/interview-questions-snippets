function Bar() {}

Bar.prototype = String.prototype;

const b = new Bar();

console.log(b.hasOwnProperty('endsWith'));
console.log(b instanceof String);
