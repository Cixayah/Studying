// 1. Escreva uma função que receba dois números como entrada e retorne a soma deles.
function somarNumeros(a: number, b: number): number {
    // Seu código aqui
    return a + b;
}
console.log(somarNumeros(2, 8)); //10

// 2. Escreva uma função que receba um número e retorne 'true' se ele for par, e 'false' caso contrário.
function isPar(numero: number): boolean {
    return numero % 2 === 0; // O retorno já é 'true' ou 'false'
}
console.log(isPar(4))

// 3. Escreva uma função que receba três números e retorne o maior entre eles.
function maiorDeTres(n1: number, n2: number, n3: number): number {
    return Math.max(n1, n2, n3);

}
console.log(maiorDeTres(3, 5, 2))

// 4. Escreva uma função que receba uma string e retorne a string invertida.
function inverterString(texto: string): string {
    return texto.split('').reverse().join("")
}
console.log(inverterString('subino'))

// 5. Escreva uma função que receba um array de números e retorne a soma de todos os elementos.
function somarArray(numeros: number[]): number {
    // Seu código aqui
}

// 6. Escreva uma função que receba um array de números e retorne o maior número encontrado.
function encontrarMaior(numeros: number[]): number {
    // Seu código aqui
}

// 7. Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.
function filtrarPares(numeros: number[]): number[] {
    // Seu código aqui
}

// 8. Escreva uma função que receba uma string e retorne a contagem de quantas vezes a letra 'a' (minúscula ou maiúscula) aparece nela.
function contarLetraA(texto: string): number {
    // Seu código aqui
}

/* Exemplos de Teste (remova o comentário para testar):
console.log("5. Soma do Array:", somarArray([10, 5, 15])); // Deve retornar 30
console.log("6. Maior Número:", encontrarMaior([50, 10, 100, 2])); // Deve retornar 100
console.log("7. Apenas Pares:", filtrarPares([1, 2, 3, 4, 5, 6])); // Deve retornar [2, 4, 6]
console.log("8. Contagem de 'a':", contarLetraA("Banana")); // Deve retornar 3
*/