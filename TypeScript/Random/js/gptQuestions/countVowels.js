"use strict";
function countVowels(s) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
const exampleString = "Olá, meu nome é Cix";
console.log(countVowels(exampleString));
