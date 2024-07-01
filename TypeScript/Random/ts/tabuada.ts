import * as readline from 'readline';

// Criei uma interface para ler e escrever no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Esta função verifica se a entrada é um número válido
const isValidNumber = (input: string): boolean => {
  return !isNaN(parseInt(input, 10));
};

// Esta função imprime a tabuada do número fornecido
const printTabuada = (n: number) => {
  console.log(`Tabuada do ${n}`);
  for (let i: number = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
};

// Pergunto ao usuário se ele deseja continuar
const askContinue = () => {
  rl.question('Deseja continuar? (s/sim): ', (answer: string) => {
    // Converto a resposta para minúsculas e removo espaços em branco
    const normalizedAnswer = answer.trim().toLowerCase();
    // Se a resposta for 's' ou 'sim', chamo a função askQuestion novamente
    if (normalizedAnswer === 's' || normalizedAnswer === 'sim') {
      askQuestion();
    } else {
      // Caso contrário, encerro o programa
      console.log('Programa finalizado com sucesso!');
      rl.close();
    }
  });
};

// Função principal que pergunta o número da tabuada
const askQuestion = () => {
  rl.question('Digite o número da tabuada: ', (input: string) => {
    // Verifico se a entrada é um número válido
    if (isValidNumber(input)) {
      // Converto a entrada para número
      const n: number = parseInt(input, 10);
      // Imprimo a tabuada
      printTabuada(n);
      // Pergunto se o usuário deseja continuar
      askContinue();
    } else {
      // Se a entrada não for válida, mostro uma mensagem de erro
      console.log('Por favor, digite um número válido');
      // E pergunto novamente
      askQuestion();
    }
  });
};

// Inicio o programa chamando a função askQuestion
askQuestion();
