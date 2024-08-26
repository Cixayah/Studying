let rlSync = require('readline-sync'); // require readline-sync module
let myName = rlSync.question("What is your name?\n"); // prompt user for input
let myAge = rlSync.question("How old are you?\n"); // prompt user for input
console.log(`Hello, my name is ${myName} and I am ${myAge} years old.`); // log the user's name and age