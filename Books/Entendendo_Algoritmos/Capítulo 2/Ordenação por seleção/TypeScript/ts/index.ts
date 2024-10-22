// Exemplo 1: for
console.log("Exemplo 1: for");
for (let i = 0; i < 5; i++) {
  console.log(`Valor de i: ${i}`);
}

// Exemplo 2: while
console.log("Exemplo 2: while");
let contador = 0;
while (contador < 5) {
  console.log(`Contador: ${contador}`);
  contador++;
}

// Exemplo 3: do...while
console.log("Exemplo 3: do...while");
let numero = 0;
do {
  console.log(`Número: ${numero}`);
  numero++;
} while (numero < 5);

// Exemplo 4: for...of
console.log("Exemplo 4: for...of");
const numeros = [1, 2, 3, 4, 5];
for (const numero of numeros) {
  console.log(`Número: ${numero}`);
}

// Exemplo 5: for...in
console.log("Exemplo 5: for...in");
const pessoa = { nome: "Maria", idade: 25, cidade: "São Paulo" };
for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave as keyof typeof pessoa]}`);
}

// Exemplo 6: break e continue
console.log("Exemplo 6: break");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Interrompe o laço quando i for 5
  }
  console.log(i);
}

console.log("Exemplo 7: continue");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Pula os números pares
  }
  console.log(i);
}
