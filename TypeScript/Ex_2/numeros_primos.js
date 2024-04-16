function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
// Exemplo de uso da função:
var numero = 17;
if (ehPrimo(numero)) {
    console.log("".concat(numero, " \u00E9 primo."));
}
else {
    console.log("".concat(numero, " n\u00E3o \u00E9 primo."));
}
