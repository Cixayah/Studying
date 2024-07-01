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
function clear() {
    console.clear();
}
const askQuestion = () => {
    rl.question('Digite o número da tabuada: ', (input) => {
        let n = parseInt(input, 10);
        if (isNaN(n)) {
            console.log('Por favor, digite um número válido');
            askQuestion();
        }
        else {
            clear();
            console.log(`tabuada do ${n}`);
            for (let i = 1; i <= 10; i++) {
                console.log(`${n} x ${i} = ${n * i}`);
            }
            rl.question('Deseja continuar? (s/n): ', (answerQuestion) => {
                if (answerQuestion.toLocaleLowerCase() === 's' ||
                    answerQuestion.toLocaleLowerCase() === 'sim') {
                    askQuestion();
                }
                else {
                    rl.close();
                }
            });
        }
    });
};
askQuestion();