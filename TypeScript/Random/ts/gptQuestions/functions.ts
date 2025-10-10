// Definindo uma função simples que recebe dois números e retorna a soma deles
function sum(a: number, b: number): number {
  // Dentro da função, simplesmente retorno a soma dos dois números
  return a + b;
}

// Chamando a função sum e armazenando o resultado em uma variável em inglês
const result: number = sum(5, 3);

// Imprimindo o resultado no console
console.log('O resultado da soma é:', result);

function sub(c: number, d: number): number {
  return c - d;
}
const subResult: number = sub(5, 3);
console.log('O resultado da subtração é:', subResult);
