let nome: string = 'Cix';
let idade: number = 23;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;   // bigint não é suportado no tsconfig.json  
// Array
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    nome: 'Cix',
    idade: 27
};
// Funções
function soma(x: number, y: number): number {
    return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;
// Module mode
export default 1;                   