// A diferença do "do while" para o "while" é que "do while"
// sempre executa o bloco de código pelo menos uma vez,
// independentemente da condição ser verdadeira ou falsa.
// O teste da condição é realizado após a execução do bloco de código.
// Já o "while" primeiro avalia a condição, e só então executa o bloco de código
// se a condição for verdadeira. Se a condição for falsa desde o início,
// o bloco de código dentro do "while" nunca será executado.

let count: number = 0;

// Exemplo de um loop "do while"
do {
  // Este bloco de código será executado pelo menos uma vez
  console.log("Execução do 'do while': " + count);
  count++;
} while (count < 3); // A condição é avaliada após a execução do bloco de código

// O console exibirá:
// Execução do 'do while': 0
// Execução do 'do while': 1
// Execução do 'do while': 2

count = 0;

// Exemplo de um loop "while"
while (count < 3) {
  // Este bloco de código será executado somente se a condição for verdadeira
  console.log("Execução do 'while': " + count);
  count++;
}

// O console exibirá:
// Execução do 'while': 0
// Execução do 'while': 1
// Execução do 'while': 2
