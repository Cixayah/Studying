//string, bolean, number, ...
const x: number = 10;

console.log(x);

//inferencia x annotation
let y = 12; //inferencia
// y = "testando string";
let z: number = 12; //annotation

// tipos básicos
let firstName: string = "Gabriel";
let age: number = 27;
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName);
firstName = "Cix";
console.log(firstName);

//object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase()); // não dará certo por conta do TypeScript
console.log(firstName.toUpperCase);
myNumbers.push(5);
console.log(myNumbers);

//tuplas -> tuple
let myTuple: [number, string, string[]];
myTuple = [5, "teste", ["a", "b"]];
// myTuple = [true, false, true];

//object literals -> {prop: value}
const user: { name: string; age: number } = {
  name: "Xayah",
  age: 20,
};
console.log(user);
console.log(user.name);

// user.job = "Programador";

// any
let a: any = 0;
a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10";
id = 200;
// abaixo, dará erro
// id = true
// id = []

// type alias
type myIdType = number | string | number;

const userId: myIdType = 10;
const productId: myIdType = "0001";
const shirId: myIdType = 123;

// enum
// tamanho de roupas (jeito errado: size: Médio, size: Pequeno)
enum Size {}
