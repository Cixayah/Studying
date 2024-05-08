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
let id = "10";
id = 200;
const userId = 10;
const productId = "0001";
const shirId = 123;
// enum
// tamanho de roupas (jeito errado: size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};
console.log(camisa);
// literl types
let teste;
//teste = "outroValor"
teste = "autenticado";
teste = null;
// funções
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
// console.log(sum("12", true));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Cix"));
function logger(msg) {
    // void é quando a função não possui retorno
    console.log(msg); // não é necessário mas é bom ter typagem de retorno
}
logger("Teste!");
function greeting(name, greet) {
    // "?" parametro para variável opcional
    // if (greet) {
    //   console.log(`Olá ${greet} ${name}`);
    // } else {
    //   console.log(`Olá ${name}`);
    // }
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("Thresh");
greeting("Rakan", "Suporte");
