// --- 1. Tipos Primitivos Básicos (o que o JavaScript já tem) ---

// number: Para todos os números (inteiros e decimais)
let idade: number = 30;
let preco: number = 19.99;

// string: Para textos
let nome: string = "Alice";

// boolean: Para verdadeiro ou falso
let estaAtivo: boolean = true;


// --- 2. Tipagem Implícita vs. Explícita ---

// Explícita (Recomendado para clareza): Você diz o tipo.
let contador: number = 5;

// Implícita (TS adivinha): TS infere que é 'string'.
let saudacao = "Olá Mundo!";
// É como se fosse: let saudacao: string = "Olá Mundo!";


// --- 3. Tipos Especiais ---

// any: Desliga a verificação de tipo. Use com MUITA cautela!
// Permite que você faça qualquer coisa, como no JavaScript puro.
let valorQualquer: any = 10;
valorQualquer = "Agora sou uma string";

// unknown: Mais seguro que 'any'. Você precisa checar o tipo antes de usar.
let dadoDesconhecido: unknown = "Pode ser qualquer coisa";
// (dadoDesconhecido como string).toUpperCase(); // Só funciona após uma verificação!

// void: Usado para funções que não retornam nada.
function logarMensagem(msg: string): void {
    console.log(msg);
    // Não tem 'return'
}

// never: Usado para funções que NUNCA terminam de executar (ex: loops infinitos ou lançam um erro).
function lancaErro(mensagem: string): never {
    throw new Error(mensagem);
}


// --- 4. Arrays (Listas) ---

// Array de strings:
let listaDeFrutas: string[] = ["Maçã", "Banana", "Morango"];

// Array de números (sintaxe alternativa, menos comum):
let listaDeNumeros: Array<number> = [1, 2, 3, 4];

// Array que aceita strings OU números (Union Type, veja mais abaixo):
let listaMista: (string | number)[] = ["Oi", 10, "Tchau", 20];


// --- 5. Funções ---

// Anotações: 
// 1. Tipagem dos parâmetros (person: string, idade: number)
// 2. Tipagem do valor de retorno (: string)
function criarDescricao(pessoa: string, anos: number): string {
    return `A pessoa ${pessoa} tem ${anos} anos.`;
}
console.log(criarDescricao(nome, idade));


// --- 6. Interfaces (Para definir a "forma" de objetos) ---

// Interface define a estrutura esperada para um objeto.
interface Usuario {
    id: number;
    nomeCompleto: string;
    // O '?' torna a propriedade opcional.
    email?: string;
    // Propriedade somente leitura (não pode ser alterada após a criação)
    readonly dataCadastro: Date;
}

// O objeto 'user' DEVE seguir a estrutura da interface 'Usuario'.
const user: Usuario = {
    id: 1,
    nomeCompleto: "João Silva",
    dataCadastro: new Date()
    // 'email' é opcional e não foi colocado aqui.
};


// --- 7. Type Aliases (Apelidos para Tipos) ---

// Cria um novo nome para um tipo complexo ou para um Union Type.
type ID = number | string; // Um 'ID' pode ser um número OU uma string.

let meuId1: ID = 12345;
let meuId2: ID = "a7b3c";

// Também pode ser usado para objetos, similar à Interface:
type Ponto = {
    x: number;
    y: number;
}
const coordenada: Ponto = { x: 10, y: 20 };


// --- 8. Union Types (Tipos de União) ---

// Permite que uma variável tenha um ou outro tipo.
function imprimirStatus(status: "sucesso" | "erro" | number): void {
    if (typeof status === 'number') {
        console.log(`Código: ${status}`);
    } else {
        console.log(`Status: ${status}`);
    }
}
imprimirStatus("sucesso");
imprimirStatus(200);


// --- 9. Generics (Tipos Genéricos) ---

// Permitem criar componentes que funcionam com QUALQUER tipo, 
// mas mantêm a segurança de tipo.
// O <T> representa o tipo que será definido no momento da chamada.
function primeiroElemento<T>(arr: T[]): T | undefined {
    return arr[0];
}

const primeiroNome = primeiroElemento(["Ana", "Bruno", "Carlos"]); // T é inferido como 'string'
const primeiraIdade = primeiroElemento([1, 5, 9]); // T é inferido como 'number'

// O TypeScript garante que 'primeiroNome' seja 'string' e 'primeiraIdade' seja 'number'.