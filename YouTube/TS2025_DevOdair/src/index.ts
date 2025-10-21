// 1 - Crie uma função que retorne "Hello, World!" no console
function helloWorld() {
    return 'Hello, World!';
}
console.log(helloWorld()); //Hello, World!

// 2 - A função recebe um parâmetro do tipo number e retorna o resultado da multiplicação por 2
function returnByTwo(num: number) {
    return num * 2
}
console.log(returnByTwo(5)); //10

// 3 - Crie uma função que recebe duas palavras (strings) e retorna sua concatenação. De forma resumida, deve juntar as duas palavras.
function returnTwoWords(w1: string, w2: string) {
    return w1 + ' ' + w2;
}
console.log(returnTwoWords('Vai', 'Corinthians')); //Vai Corinthians

// 4 -  Crie uma função que recebe um número e retorna true se for positivo.
function numBoolean(isTrue: number): boolean {
    return isTrue > 0
}
console.log(numBoolean(-1)); //false

// 5 - Crie uma função que recebe um número e retorna seu antecessor. Por ex, se o número for 5, retorne 4.
function numberPrev(numPrev: number) {
    return numPrev - 1
}
console.log(numberPrev(10)); //9

// 6 - Crie uma função que recebe uma variável e retorne seu tipo. Usamos operador typeof para determinar o tipo de variável.
function getValue(userValue: any) {
    return typeof userValue
}
console.log(getValue(1))

//7 - Crie uma nova função que recebe dois números e retorna a soma deles se o resultado for positivo ou zero. Se der negativo, retorna "número negativo".
function sumTwoNumbers(n1: number, n2: number) {
    if (n1 + n2 < 0) {
        return 'número negativo'
    } else {
        return n1 + n2
    }
}
console.log(sumTwoNumbers(1, 6))

//8 - Crie uma função que recebe dois valores e retorne a divisão entre eles. Caso não seja possível realizar a divisão, a função deve retornar um erro.
function divTwoNumbers(nd1: number, nd2: number) {
    if (nd2 === 0) {
        return 'Não foi possível realizar divisão por zero'
    }
    return nd1 / nd2
}
console.log(divTwoNumbers(1, 0))

//9 - Crie uma função que recebe dois números e o tipo de operação matemática. A função deve realizar o calculo com base na operação matemática oferecida.
type CalcParameters = {
    opN1: number,
    opN2: number,
    opt: 'sum' | 'sub' | 'mul' | 'div'
}
function opNum({ opN1, opN2, opt }: CalcParameters): number | string {
    switch (opt) {
        case 'sum':
            return opN1 + opN2;
        case 'sub':
            return opN1 - opN2;
        case 'mul':
            return opN1 * opN2;
        case 'div':
            // Reutiliza a lógica de checagem da divisão
            if (opN2 === 0) {
                return 'Erro: Não é possível dividir por zero';
            }
            return opN1 / opN2;
        default:
            // Caso o tipo de operação seja inválido (apesar dos tipos já ajudarem a prevenir isso)
            return 'Erro: Operação inválida';
    }
}
// Exemplos de uso correto (passando um objeto com as três propriedades):
console.log(opNum({ opN1: 10, opN2: 5, opt: 'sum' })); // 15
console.log(opNum({ opN1: 10, opN2: 5, opt: 'div' })); // 2
console.log(opNum({ opN1: 10, opN2: 0, opt: 'div' })); // Erro: Não é possível dividir por zero

//10 - Crie uma função que recebe o lado de um quadrado como parâmetro e calcula a área desse quadrado. O retorno deve ser a área calculada.
type SquareProps = {
    side: number;
}
function calcArea({ side }: SquareProps) {
    return side * side;
}
console.log(calcArea({
    side: 5
})); // 25

//11 - Crie uma função que recebe o lado de um quadrado como parâmetro e calcula o perímetro desse quadrado. O retorno deve ser o perímetro calculado.
function calcPerimeter({ side }: SquareProps) {
    return side * 4;
}
console.log(calcPerimeter({
    side: 5
})); // 20

//12 - Crie uma função que recebe o lado de um quadrado como parâmetro e calcula o perímetro e a área desse quadrado. O retorno deve ser o perímetro e a área calculados.
function calcAreaPerimeter({ side }: SquareProps) {
    const area = calcArea({ side });
    const perimeter = calcPerimeter({ side });
    return {
        area,
        perimeter
    };
}
console.log(calcAreaPerimeter({
    side: 3
}))

//13 - Crie uma função que recebe os lados de um retângulo como parâmetro e calcula o perímetro e a área desse retângulo. O retorno deve ser o perímetro e a área.
type RectangleProps = {
    sideRecWidth: number,
    sideRecHeight: number,
}
function calcRetAreaPerimeter({ sideRecWidth, sideRecHeight }: RectangleProps) {
    const areaRec = sideRecWidth * sideRecHeight;
    const perimeterRec = 2 * (sideRecWidth + sideRecHeight)
    return {
        areaRec,
        perimeterRec
    }
}
console.log(calcRetAreaPerimeter({
    sideRecWidth: 2,
    sideRecHeight: 8
}))

//14 - Escreva uma função que converta um valor entre metros e cm. A função deve receber um número e sua unidade de medida atual ("metro" ou "cm") e retornar o valor convertido para outra unidade.
type ConvMeansureProps = {
    value: number;
    unit: "metro" | "cm";
}
function convMeasure({ value, unit }: ConvMeansureProps) {

}
