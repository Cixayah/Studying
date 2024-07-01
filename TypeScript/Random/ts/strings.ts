// Vou criar um exemplo usando strings para manipular e exibir informações sobre um nome

// Definindo uma variável com o nome
const nameString: string = 'Maria';

// Imprimindo o nome em maiúsculas
console.log('Nome em maiúsculas:', nameString.toUpperCase());

// Imprimindo o nome em minúsculas
console.log('Nome em minúsculas:', nameString.toLowerCase());

// Verificando o comprimento da string (quantidade de caracteres)
console.log('Número de caracteres:', nameString.length);

// Verificando se a string contém uma substring específica
const substring: string = 'ri';
console.log(
  `A substring "${substring}" está presente no nome?`,
  nameString.includes(substring)
);

// Obtendo um caractere específico da string
const firstCharacter: string = nameString.charAt(0);
console.log('Primeiro caractere do nome:', firstCharacter);

// Concatenando strings
const lastName: string = 'Silva';
const fullName: string = nameString + ' ' + lastName;
console.log('Nome completo:', fullName);
