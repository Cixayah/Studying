"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//calculadora de imc
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
// exemplo de uso
const peso = 70; // em kg
const altura = 1.75; // em metros
const imc = calcularIMC(peso, altura);
console.log(`Seu IMC é: ${imc.toFixed(2)}`);
// classificação do IMC
function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    }
    else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso normal';
    }
    else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    }
    else {
        return 'Obesidade';
    }
}
const classificacao = classificarIMC(imc);
console.log(`Classificação do IMC: ${classificacao}`);
