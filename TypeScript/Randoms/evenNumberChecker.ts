function checkEvenOrOdd(num: number): string {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

const number = 7;
console.log(`${number} is ${checkEvenOrOdd(number)}.`);
