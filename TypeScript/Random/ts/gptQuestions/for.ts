// Vou definir um loop for que irá imprimir os números de 1 a 5 no console

import { count } from 'console';

// Aqui começo o loop: inicializo 'i' com 1, que será o meu contador
for (let i = 1; i <= 5; i++) {
  // Verifico se 'i' ainda é menor ou igual a 5, pois enquanto for, o loop continua

  // Agora, dentro do loop, vou imprimir o valor atual de 'i' no console
  console.log(i);

  // Após cada iteração, incremento 'i' em 1 para que o loop avance para o próximo número
}

// Quando 'i' não satisfizer mais a condição (ser menor ou igual a 5), o loop termina
// E 'i' não é mais acessível fora do loop

const nameC: string = 'Gabriel';
for (let y = 1; y <= 3; y++) {
  console.log(nameC, 'x', y);
}
