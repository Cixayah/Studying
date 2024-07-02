"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function () { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (input) => resolve(input));
    });
};
const main = async () => {
    try {
        const inputZ = await askQuestion('Qual operação deseja realizar? 1 Adição /  2 Subtração /  3 Multiplicação / 4 Divisão: ');
        const inputA = await askQuestion('Digite o valor A: ');
        const inputB = await askQuestion('Digite o valor B: ');
        const Z = parseInt(inputZ, 10);
        const A = parseInt(inputA, 10);
        const B = parseInt(inputB, 10);
        switch (Z) {
            case 1:
                const soma = A + B;
                console.log(`A soma entre ${A} e ${B} é: ${soma}`);
                break;
            case 2:
                const sub = A - B;
                console.log(`A subtração entre ${A} e ${B} é: ${sub}`);
                break;
            case 3:
                const mult = A * B;
                console.log(`A multiplicação entre ${A} e ${B} é: ${mult}`);
                break;
            case 4:
                if (B === 0) {
                    console.log('Não é possível dividir por zero.');
                }
                else {
                    const div = A / B;
                    console.log(`A divisão entre ${A} e ${B} é: ${div}`);
                }
                break;
            default:
                console.log('Operação inválida. Escolha uma das opções de 1 a 4.');
        }
    }
    catch (error) {
        console.error('Ocorreu um erro:', error);
    }
    finally {
        rl.close();
    }
};
main();
