"use strict";
let nome = "João";
let idade = 25;
let ativo = true;
function saudacao(nome, idade) {
    return `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
}
function apresentarPessoa(pessoa) {
    return `Esta é ${pessoa.nome}, ela tem ${pessoa.idade} anos e está ${pessoa.ativo ? "ativa" : "inativa"}.`;
}
let pessoa = {
    nome: "Maria",
    idade: 30,
    ativo: false
};
console.log(saudacao(nome, idade));
console.log(apresentarPessoa(pessoa));
