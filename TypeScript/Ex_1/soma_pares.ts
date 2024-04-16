function somaNumerosPares(numero: number): number {
    let soma: number = 0;
    for (let i: number = 2; i <= numero; i += 2) {
        soma += i;
    }
    return soma;
}

function main(): void {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Digite um número inteiro positivo: ", (input: string) => {
        const numero: number = parseInt(input);
        if (isNaN(numero) || numero <= 0) {
            console.log("Por favor, digite um número inteiro positivo válido.");
        } else {
            const resultado: number = somaNumerosPares(numero);
            console.log(`A soma dos números pares até ${numero} é: ${resultado}`);
        }
        readline.close();
    });
}

main();
