"use strict";
//string, bolean, number, ...
const x = 10;
console.log(x);
//inferencia x annotation
let y = 12; //inferencia
// y = "testando string";
let z = 12; //annotation
// tipos básicos
let firstName = "Gabriel";
let age = 27;
const isAdmin = true;
// String != string
console.log(typeof firstName);
firstName = "Cix";
console.log(firstName);
//object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase()); // não dará certo por conta do TypeScript
console.log(firstName.toUpperCase);
myNumbers.push(5);
console.log(myNumbers);
//tuplas -> tuple
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// myTuple = [true, false, true];
//object literals -> {prop: value}
const user = {
    name: "Xayah",
    age: 20,
};
console.log(user);
console.log(user.name);
// user.job = "Programador";
// any
let a = 0;
a = "teste";
a = true;
a = [];
// union type
let id;
