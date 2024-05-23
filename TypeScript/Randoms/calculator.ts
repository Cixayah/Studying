import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite um número: ', (input: string) => {
  const number = parseInt(input);

  if (isNaN(number)) {
    console.log('Por favor, digite um número válido.');
    rl.close();
    return;
  }

  console.log(`Tabuada de ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }

  rl.close();
});
