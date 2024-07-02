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
    const inputZ = await askQuestion(
      'Qual operação deseja realizar? 1 Adição /  2 Subtração /  3 Multiplicação / 4 Divisão: '
    );
    const inputA = await askQuestion('Digite o valor A: ');
    const inputB = await askQuestion('Digite o valor B: ');

    const Z: number = parseInt(inputZ, 10);
    const A: number = parseInt(inputA, 10);
    const B: number = parseInt(inputB, 10);

    switch (Z) {
      case 1:
        const soma = A + B;
        console.log(`A soma entre ${A} e ${B} é: ${soma}`);
        break;
      case 2:
        const sub = A - B;
        console.log(`A subtração entre ${A} e ${B} é: ${sub}`);
        break;
      case 3:
        const mult = A * B;
        console.log(`A multiplicação entre ${A} e ${B} é: ${mult}`);
        break;
      case 4:
        if (B === 0) {
          console.log('Não é possível dividir por zero.');
        } else {
          const div = A / B;
          console.log(`A divisão entre ${A} e ${B} é: ${div}`);
        }
        break;
      default:
        console.log('Operação inválida. Escolha uma das opções de 1 a 4.');
    }
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  } finally {
    rl.close();
  }
};

main();
