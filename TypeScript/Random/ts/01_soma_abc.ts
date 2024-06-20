import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(question, (input: string) => resolve(input));
  });
};

const main = async () => {
  try {
    const inputA = await askQuestion('Digite o valor A: ');
    const inputB = await askQuestion('Digite o valor B: ');
    const inputC = await askQuestion('Digite o valor C: ');

    const A: number = parseInt(inputA, 10);
    const B: number = parseInt(inputB, 10);
    const C: number = parseInt(inputC, 10);

    const soma = A + B;

    console.log(`A soma entre A e B é: ${soma}`);

    if (soma < C) {
      console.log('A soma é menor que C.');
    } else {
      console.log('A soma não é menor que C.');
    }
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  } finally {
    rl.close();
  }
};

main();
