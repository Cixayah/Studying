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
    return numPrev -1
}
console.log(numberPrev(10)); //9

// 6 - Crie uma função que recebe uma variável e retorne seu tipo. Usamos operador typeof para determinar o tipo de variável.
function getValue(userValue: any) {
    return typeof userValue
}
console.log(getValue(1))

//7 - Crie uma nova função que recebe dois números e retorna a soma deles se o resultado for positivo ou zero. Se der negativo, retorna "número negativo".
function sumTwoNumbers(n1: number, n2: number) {
    let sumTwoNumb: number = n1 + n2;
    if (sumTwoNumb < 0){
        return 'número negativo'
    } else {
        return sumTwoNumb
    }
}
console.log(sumTwoNumbers(1,-2))