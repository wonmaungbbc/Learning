const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const sayHi = (message, name) => `${message} ${name}`;
const remainderZero = (num, divNum) => num % divNum === 0;

module.exports = { sum, mul, sub, div, sayHi, remainderZero };
