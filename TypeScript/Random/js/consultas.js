"use strict";
let username = 'João';
let age = 20;
let height = 1.75;
function soma(a, b) {
    return a + b;
}
let resultado1 = soma(5, 3);
console.log('Resultado da soma:', resultado1);
let number1 = 10;
if (number1 > 0) {
    console.log('O número é positivo.');
}
else if (number1 < 0) {
    console.log('O número é negativo.');
}
else {
    console.log('O número é zero.');
}
for (let i = 0; i < 5; i++) {
    console.log('Número:', i);
}
let fruits = ['apple', 'banana', 'orange'];
console.log('Frutas:', fruits);
function multiplicacao(x, y) {
    return x * y;
}
let resultado2 = multiplicacao(4, 5);
console.log('Resultado da multiplicação:', resultado2);
let number2 = 7;
if (number2 % 2 === 0) {
    console.log('O número é par.');
}
else {
    console.log('O número é ímpar.');
}
for (let i = 0; i < 4; i++) {
    console.log('Número:', i);
}
let person = {
    name: 'Maria',
    age: 22,
    height: 1.6,
};
console.log('Pessoa:', person);
function divisao(x, y) {
    return x / y;
}
let resultado3 = divisao(10, 2);
console.log('Resultado da divisão:', resultado3);
let numbers = [1, 2, 3, 4, 5];
console.log('Números:', numbers);
function potenciacao(base, expoente) {
    return Math.pow(base, expoente);
}
let resultado4 = potenciacao(2, 3);
console.log('Resultado da potenciação:', resultado4);
function isPalindromo(word) {
    return word === word.split('').reverse().join('');
}
let word1 = 'level';
console.log(`A palavra "${word1}" é palíndromo?`, isPalindromo(word1));
let person2 = { name: 'Carlos' };
console.log('Pessoa:', person2);
function calcularMedia(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}
let average = calcularMedia([1, 2, 3, 4, 5]);
console.log('Média dos números:', average);
function isPrime(num) {
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;
    if (num % 2 === 0 || num % 3 === 0)
        return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    }
    return true;
}
let number3 = 7;
console.log(`O número ${number3} é primo?`, isPrime(number3));
let people = [
    { name: 'Ana', age: 25 },
    { name: 'Paulo', age: 30 },
    { name: 'Mariana', age: 28 },
];
console.log('Pessoas:', people);
function calcularFatorial(num) {
    if (num === 0 || num === 1)
        return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
let fatorial = calcularFatorial(5);
console.log('Fatorial de 5:', fatorial);
function isPalindrome(word) {
    word = word.toLowerCase().replace(/\s/g, '');
    return word === word.split('').reverse().join('');
}
let word2 = 'Ame a ema';
console.log(`A frase "${word2}" é um palíndromo?`, isPalindrome(word2));
let map = new Map();
map.set('um', 1);
map.set('dois', 2);
map.set('três', 3);
console.log('Mapa:', map);
