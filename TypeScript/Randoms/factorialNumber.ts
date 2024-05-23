function calculateFactorial(num: number): number {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
}

const num = 5;
const factorial = calculateFactorial(num);
console.log(`O fatorial de ${num} é ${factorial}.`);
