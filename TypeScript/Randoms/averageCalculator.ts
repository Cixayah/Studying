function calculateAverage(num1: number, num2: number, num3: number): number {
    return (num1 + num2 + num3) / 3;
}

const grade1 = 7;
const grade2 = 8;
const grade3 = 6;
const average = calculateAverage(grade1, grade2, grade3);
console.log("The average is:", average);
