"use strict";
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Usando o loop 'for':");
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
console.log("\nUsando o loop 'for...of':");
for (let number of num) {
    console.log(number);
}
console.log("\nUsando o loop 'while':");
let index = 0;
while (index < num.length) {
    console.log(num[index]);
    index++;
}
console.log("\nUsando o loop 'do...while':");
index = 0;
do {
    console.log(num[index]);
    index++;
} while (index < num.length);
