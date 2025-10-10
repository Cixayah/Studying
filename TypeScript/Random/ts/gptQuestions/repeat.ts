// Definindo um array de números
let num_array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando o loop 'for' para iterar sobre o array
console.log("Usando o loop 'for':");
for (let i: number = 0; i < num_array.length; i++) {
  console.log(num_array[i]);
}

// Usando o loop 'for...of' para iterar sobre o array
console.log("\nUsando o loop 'for...of':");
for (let number of num_array) {
  console.log(number);
}

// Usando o loop 'while' para iterar sobre o array
console.log("\nUsando o loop 'while':");
let index: number = 0;
while (index < num_array.length) {
  console.log(num_array[index]);
  index++;
}

// Usando o loop 'do...while' para iterar sobre o array
console.log("\nUsando o loop 'do...while':");
index = 0;
do {
  console.log(num_array[index]);
  index++;
} while (index < num_array.length);