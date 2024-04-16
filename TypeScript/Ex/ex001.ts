import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o seu nome: ", (name: string) => {
    console.log(`É um prazer te conhecer, ${name}!`);
    rl.close();
});
