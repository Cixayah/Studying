function calculateResult(scoreA: number, scoreB: number): string {
  const average = (scoreA + scoreB) / 2;

  if (average >= 7) {
    return 'Approved';
  } else if (average >= 4) {
    return 'Recovery';
  } else {
    return 'Failed';
  }
}

// Example of usage
const scoreA = 6;
const scoreB = 8;
const result = calculateResult(scoreA, scoreB);
console.log(result); // Output: Recovery
