// 1. Declaração de variáveis com tipos
let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;

// 2. Função simples com tipos de parâmetros e retorno
function saudacao(nome: string, idade: number): string {
    return `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
}

// 3. Interface para definir a estrutura de um objeto
interface Pessoa {
    nome: string;
    idade: number;
    ativo: boolean;
}

// 4. Função que recebe um objeto do tipo Pessoa
function apresentarPessoa(pessoa: Pessoa): string {
    return `Esta é ${pessoa.nome}, ela tem ${pessoa.idade} anos e está ${pessoa.ativo ? "ativa" : "inativa"}.`;
}

// 5. Criando um objeto do tipo Pessoa
let pessoa: Pessoa = {
    nome: "Maria",
    idade: 30,
    ativo: false
};

// 6. Chamando as funções e exibindo os resultados
console.log(saudacao(nome, idade));
console.log(apresentarPessoa(pessoa));