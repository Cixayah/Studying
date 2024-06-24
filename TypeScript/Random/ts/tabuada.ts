import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = () => {
  rl.question('Digite o número da tabuada: ', (input: string) => {
    let n: number = parseInt(input, 10);
    if (isNaN(n)) {
      console.log('Por favor, digite um número válido');
      askQuestion();
    } else {
      console.log(`Tabuada do ${n}`);
      for (let i: number = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
      }

      rl.question('Deseja continuar? (s/sim): ', (answerQuestion: string) => {
        if (
          answerQuestion.toLowerCase() === 's' ||
          answerQuestion.toLowerCase() === 'sim'
        ) {
          askQuestion();
        } else {
          rl.close();
        }
      });
    }
  });
};

askQuestion();
