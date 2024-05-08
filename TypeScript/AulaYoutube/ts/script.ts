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
enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}

const camisa = {
  name: "Camisa gola V",
  size: Size.G,
};
console.log(camisa);

// literl types
let teste: "autenticado" | null;
//teste = "outroValor"
teste = "autenticado";
teste = null;

// funções
function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(12, 12));
// console.log(sum("12", true));

function sayHelloTo(name: string): string {
  return `Hello ${name}`;
}

console.log(sayHelloTo("Cix"));

function logger(msg: string): void {
  // void é quando a função não possui retorno
  console.log(msg); // não é necessário mas é bom ter typagem de retorno
}
logger("Teste!");

function greeting(name: string, greet?: string): void {
  //novamente, quando não retorna nada, é typado como void

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

// interfaces
interface MathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumbers(numbers: MathFunctionParams) {
  return numbers.n1 * numbers.n2;
}
const someNumbers: MathFunctionParams = {
  n1: 5,
  n2: 10,
};
console.log(multiplyNumbers(someNumbers));

// narrowing
//checagem de código
function doSomething(info: number | boolean) {
  if (typeof info == "number") {
    console.log(`O número é ${info}`);
    return;
  }
  console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);

//generics
//<T> ou <U> são os mais utilizados nesta situação
function showArrayItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`);
  });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItems(a1);
showArrayItems(a2);
