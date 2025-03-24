"use strict";
let num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Usando o loop 'for':");
for (let i = 0; i < num_array.length; i++) {
    console.log(num_array[i]);
}
console.log("\nUsando o loop 'for...of':");
for (let number of num_array) {
    console.log(number);
}
console.log("\nUsando o loop 'while':");
let index = 0;
while (index < num_array.length) {
    console.log(num_array[index]);
    index++;
}
console.log("\nUsando o loop 'do...while':");
index = 0;
do {
    console.log(num_array[index]);
    index++;
} while (index < num_array.length);
