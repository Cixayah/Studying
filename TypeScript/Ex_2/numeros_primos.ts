function ehPrimo(numero: number): boolean {
    if (numero <= 1) {
        return false;
    }
    for (let i: number = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Exemplo de uso da função:
const numero: number = 17;
if (ehPrimo(numero)) {
    console.log(`${numero} é primo.`);
} else {
    console.log(`${numero} não é primo.`);
}
