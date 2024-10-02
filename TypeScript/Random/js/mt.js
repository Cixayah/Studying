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
const isValidNumber = (input) => {
    return !isNaN(parseInt(input, 10));
};
const printTabuada = (n) => {
    console.log(`Tabuada do ${n}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
};
const askContinue = () => {
    rl.question('Deseja continuar? (s/sim): ', (answer) => {
        const normalizedAnswer = answer.trim().toLowerCase();
        if (normalizedAnswer === 's' || normalizedAnswer === 'sim') {
            askQuestion();
        }
        else {
            console.log('Programa finalizado com sucesso!');
            rl.close();
        }
    });
};
const askQuestion = () => {
    rl.question('Digite o número da tabuada: ', (input) => {
        if (isValidNumber(input)) {
            const n = parseInt(input, 10);
            printTabuada(n);
            askContinue();
        }
        else {
            console.log('Por favor, digite um número válido');
            askQuestion();
        }
    });
};
askQuestion();
