"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
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
        const inputA = await askQuestion('Digite o valor A: ');
        const inputB = await askQuestion('Digite o valor B: ');
        const inputC = await askQuestion('Digite o valor C: ');
        const A = parseInt(inputA, 10);
        const B = parseInt(inputB, 10);
        const C = parseInt(inputC, 10);
        const soma = A + B;
        console.log(`A soma entre A e B é: ${soma}`);
        if (soma < C) {
            console.log('A soma é menor que C.');
        }
        else {
            console.log('A soma não é menor que C.');
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
