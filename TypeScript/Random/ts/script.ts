// Definição da função countEvenNumbers
function countEvenNumbers(limit: number): void {
  // Loop for que itera de 0 até o limite (inclusive)
  for (let i = 0; i <= limit; i++) {
    // Verifica se o número atual (i) é par usando o operador módulo (%)
    if (i % 2 === 0) {
      // Se i for par, imprime o valor de i no console
      console.log(i);
    }
  }
}

// Define o limite até onde queremos contar os números pares (neste caso, 100)
const limit = 100;

// Chama a função countEvenNumbers com o limite especificado
countEvenNumbers(limit);
