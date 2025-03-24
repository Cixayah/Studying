function countVowels(s: string): number {
    const vowels = "aeiouAEIOU"; // Inclui vogais minúsculas e maiúsculas
    let count = 0;

    for (let char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Exemplo de uso
const exampleString = "Olá, meu nome é Cix";
console.log(countVowels(exampleString)); // Saída: 9
