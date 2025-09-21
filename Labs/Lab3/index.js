const http = require('http'); // built in module
const os = require('os'); // built in module

const arithmetic = require('./modules/arithmetic')
// const {add, subtract} = arithmetic
const greet = require('./modules/greet')
const student = require('./modules/student')
// console.log(arithmetic);

// console.log(global)
// console.log(console)
// console.log(__dirname)
// console.log(__filename)

// console.log(module) // current module
// console.log(module.exports);

console.log(greet);
console.log(arithmetic);
console.log(arithmetic.add(5,3));
console.log(arithmetic.subtract(5,3));
console.log(arithmetic.multiply(5,3));
console.log(arithmetic.divide(5,3));
console.log(student.getStudent);
