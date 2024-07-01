// Função para realizar pesquisa binária
function pesquisaBinaria(lista: number[], item: number): number | null {
  // Define os limites inicial e final da pesquisa
  let baixo: number = 0;
  let alto: number = lista.length - 1;

  // Enquanto o limite inferior não ultrapassar o limite superior
  while (baixo <= alto) {
    // Calcula o índice do elemento central
    const meio: number = Math.floor((baixo + alto) / 2);
    const chute: number = lista[meio];

    // Verifica se o elemento central é o item procurado
    if (chute === item) {
      return meio; // Retorna o índice se encontrado
    }

    // Se o valor do elemento central for maior que o item
    if (chute > item) {
      alto = meio - 1; // Ajusta o limite superior para o meio - 1
    } else {
      baixo = meio + 1; // Ajusta o limite inferior para o meio + 1
    }
  }

  // Retorna null se o item não for encontrado
  return null;
}

// Lista para teste
const minhaLista: number[] = [1, 3, 5, 7, 9];

// Testa a função de pesquisa binária
console.log(pesquisaBinaria(minhaLista, 3)); // => 1 (índice do item 3 na lista)
console.log(pesquisaBinaria(minhaLista, -1)); // => null (item -1 não encontrado)
