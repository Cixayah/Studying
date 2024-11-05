"use strict";
class Usuario {
    nome;
    idade;
    email;
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    imprimirInformacoes() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Email: ${this.email}`);
    }
}
const usuario1 = new Usuario('João', 30, 'joao@example.com');
usuario1.imprimirInformacoes();
