// Console is an API provided by the browsers
// console.log("Hello World!");

// var message = "Hello World!";
// console.log(message);

// var message = "Hello Arun!"; // Can create same variable usinh var
// console.log(message);

// let message2 = "Learning Js";
// console.log(message2);

// // let message2 ="JS is Best"; // Gives error

// const discount = 0.3; // Cannot be assigned twice
// console.log(discount)

// let array = [0]
// console.log(typeof array)


// Readline Sync
const readlineSync = require('readline-sync')
// require("readline-sync").question()

let name = readlineSync.question('Enter your name: ')
console.log(name)