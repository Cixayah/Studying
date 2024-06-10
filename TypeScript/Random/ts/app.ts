// Exemplo 1: Declarando e utilizando variáveis
let username: string = 'João'; // Declara uma variável 'name' do tipo string e atribui o valor 'João'
let age: number = 20; // Declara uma variável 'age' do tipo number e atribui o valor 20
let height: number = 1.75; // Declara uma variável 'height' do tipo number e atribui o valor 1.75

// Exemplo 2: Função de adição
function soma(a: number, b: number): number {
  return a + b; // Retorna a soma dos dois números passados como parâmetros
}
let resultado1: number = soma(5, 3); // Chama a função 'soma' com os números 5 e 3 e armazena o resultado
console.log('Resultado da soma:', resultado1); // Imprime o resultado da soma

// Exemplo 3: Verificando se um número é positivo, negativo ou zero
let number1: number = 10; // Declara uma variável 'number1' e atribui o valor 10
if (number1 > 0) {
  // Verifica se 'number1' é maior que 0
  console.log('O número é positivo.'); // Se verdadeiro, imprime que o número é positivo
} else if (number1 < 0) {
  // Se não, verifica se 'number1' é menor que 0
  console.log('O número é negativo.'); // Se verdadeiro, imprime que o número é negativo
} else {
  // Se nenhuma das condições anteriores for verdadeira
  console.log('O número é zero.'); // Imprime que o número é zero
}

// Exemplo 4: Laço de repetição para imprimir números de 0 a 4
for (let i = 0; i < 5; i++) {
  // Inicia um laço de repetição de 0 a 4
  console.log('Número:', i); // Imprime o valor de 'i' a cada iteração
}

// Exemplo 5: Declarando e utilizando um array de strings
let fruits: string[] = ['apple', 'banana', 'orange']; // Declara um array de strings com frutas
console.log('Frutas:', fruits); // Imprime o array de frutas

// Exemplo 6: Função de multiplicação
function multiplicacao(x: number, y: number): number {
  return x * y; // Retorna a multiplicação dos dois números passados como parâmetros
}
let resultado2: number = multiplicacao(4, 5); // Chama a função 'multiplicacao' com os números 4 e 5
console.log('Resultado da multiplicação:', resultado2); // Imprime o resultado da multiplicação

// Exemplo 7: Verificando se um número é par ou ímpar
let number2: number = 7; // Declara uma variável 'number2' e atribui o valor 7
if (number2 % 2 === 0) {
  // Verifica se 'number2' é divisível por 2
  console.log('O número é par.'); // Se verdadeiro, imprime que o número é par
} else {
  // Se não for divisível por 2
  console.log('O número é ímpar.'); // Imprime que o número é ímpar
}

// Exemplo 8: Laço de repetição para imprimir números de 0 a 3
for (let i = 0; i < 4; i++) {
  // Inicia um laço de repetição de 0 a 3
  console.log('Número:', i); // Imprime o valor de 'i' a cada iteração
}

// Exemplo 9: Declarando e utilizando um objeto
let person: { name: string; age: number; height: number } = {
  name: 'Maria',
  age: 22,
  height: 1.6,
};
console.log('Pessoa:', person); // Imprime o objeto 'person'

// Exemplo 10: Função de divisão
function divisao(x: number, y: number): number {
  return x / y; // Retorna a divisão do primeiro número pelo segundo
}
let resultado3: number = divisao(10, 2); // Chama a função 'divisao' com os números 10 e 2
console.log('Resultado da divisão:', resultado3); // Imprime o resultado da divisão

// Exemplo 11: Declarando e utilizando um array de números
let numbers: number[] = [1, 2, 3, 4, 5]; // Declara um array de números
console.log('Números:', numbers); // Imprime o array de números

// Exemplo 12: Função de potenciação
function potenciacao(base: number, expoente: number): number {
  return Math.pow(base, expoente); // Retorna a base elevada ao expoente
}
let resultado4: number = potenciacao(2, 3); // Chama a função 'potenciacao' com os números 2 e 3
console.log('Resultado da potenciação:', resultado4); // Imprime o resultado da potenciação

// Exemplo 13: Verificando se uma palavra é palíndromo
function isPalindromo(word: string): boolean {
  return word === word.split('').reverse().join(''); // Verifica se a palavra é igual à sua inversa
}
let word1: string = 'level'; // Define uma palavra
console.log(`A palavra "${word1}" é palíndromo?`, isPalindromo(word1)); // Imprime se a palavra é palíndromo

// Exemplo 14: Declarando e utilizando um objeto com propriedades opcionais
let person2: { name: string; age?: number } = { name: 'Carlos' }; // Define um objeto com uma propriedade opcional
console.log('Pessoa:', person2); // Imprime o objeto 'person2'

// Exemplo 15: Função para calcular a média de um array de números
function calcularMedia(numbers: number[]): number {
  let sum: number = 0; // Inicializa a variável 'sum' com o valor 0
  for (let num of numbers) {
    // Itera sobre cada número do array 'numbers'
    sum += num; // Adiciona o número à soma
  }
  return sum / numbers.length; // Retorna a média dos números
}
let average: number = calcularMedia([1, 2, 3, 4, 5]); // Chama a função 'calcularMedia' com um array de números
console.log('Média dos números:', average); // Imprime a média dos números

// Exemplo 16: Verificando se um número é primo
function isPrime(num: number): boolean {
  if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
  if (num <= 3) return true; // 2 e 3 são primos
  if (num % 2 === 0 || num % 3 === 0) return false; // Números divisíveis por 2 ou 3 não são primos
  for (let i = 5; i * i <= num; i += 6) {
    // Verifica divisibilidade por números até a raiz quadrada de 'num'
    if (num % i === 0 || num % (i + 2) === 0) return false; // Verifica divisibilidade por 'i' e 'i + 2'
  }
  return true; // Se não foi encontrado divisor, o número é primo
}
let number3: number = 7; // Define um número para verificar se é primo
console.log(`O número ${number3} é primo?`, isPrime(number3)); // Imprime se o número é primo

// Exemplo 17: Declarando e utilizando um array de objetos
let people: { name: string; age: number }[] = [
  { name: 'Ana', age: 25 },
  { name: 'Paulo', age: 30 },
  { name: 'Mariana', age: 28 },
];
console.log('Pessoas:', people); // Imprime o array de objetos 'people'

// Exemplo 18: Função para calcular o fatorial de um número
function calcularFatorial(num: number): number {
  if (num === 0 || num === 1) return 1; // 0 e 1 têm fatorial igual a 1
  let result: number = 1;
  for (let i = 2; i <= num; i++) {
    // Calcula o fatorial multiplicando os números de 2 até 'num'
    result *= i;
  }
  return result; // Retorna o fatorial de 'num'
}
let fatorial: number = calcularFatorial(5); // Calcula o fatorial de 5
console.log('Fatorial de 5:', fatorial); // Imprime o fatorial de 5

// Exemplo 19: Verificando se uma palavra é um palíndromo ignorando espaços e maiúsculas/minúsculas
function isPalindrome(word: string): boolean {
  word = word.toLowerCase().replace(/\s/g, ''); // Converte a palavra para minúsculas e remove espaços
  return word === word.split('').reverse().join(''); // Verifica se a palavra é igual à sua inversa
}
let word2: string = 'Ame a ema'; // Define uma palavra com espaços
console.log(`A frase "${word2}" é um palíndromo?`, isPalindrome(word2)); // Imprime se a frase é um palíndromo

// Exemplo 20: Declarando e utilizando um mapa (Map)
let map: Map<string, number> = new Map(); // Cria um novo mapa
map.set('um', 1); // Adiciona uma chave-valor ao mapa
map.set('dois', 2);
map.set('três', 3);
console.log('Mapa:', map); // Imprime o mapa
