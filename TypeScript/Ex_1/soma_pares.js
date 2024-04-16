function somaNumerosPares(numero) {
    var soma = 0;
    for (var i = 2; i <= numero; i += 2) {
        soma += i;
    }
    return soma;
}
function main() {
    var readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question("Digite um número inteiro positivo: ", function (input) {
        var numero = parseInt(input);
        if (isNaN(numero) || numero <= 0) {
            console.log("Por favor, digite um número inteiro positivo válido.");
        }
        else {
            var resultado = somaNumerosPares(numero);
            console.log("A soma dos n\u00FAmeros pares at\u00E9 ".concat(numero, " \u00E9: ").concat(resultado));
        }
        readline.close();
    });
}
main();
