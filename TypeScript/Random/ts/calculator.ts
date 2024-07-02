import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function clear() {
  console.clear();
}

const askQuestion = () => {
  rl.question('Digite o número da tabuada: ', (input: string) => {
    let n: number = parseInt(input, 10);
    if (isNaN(n)) {
      console.log('Por favor, digite um número válido');
      askQuestion(); // Repergunta caso o input não seja um número
    } else {
      clear();
      console.log(`tabuada do ${n}`);

      for (let i: number = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
      }

      rl.question('Deseja continuar? (s/n): ', (answerQuestion: string) => {
        if (
          answerQuestion.toLocaleLowerCase() === 's' ||
          answerQuestion.toLocaleLowerCase() === 'sim'
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
