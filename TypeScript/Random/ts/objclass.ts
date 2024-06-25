// Vou criar um exemplo utilizando objetos para representar informações de um usuário

// Definindo uma classe Usuario
class Usuario {
  // Atributos da classe
  nome: string;
  idade: number;
  email: string;

  // Construtor da classe
  constructor(nome: string, idade: number, email: string) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }

  // Método para imprimir informações do usuário
  imprimirInformacoes() {
    console.log(
      `Nome: ${this.nome}, Idade: ${this.idade}, Email: ${this.email}`
    );
  }
}

// Criando um objeto Usuario usando a classe
const usuario1 = new Usuario('João', 30, 'joao@example.com');

// Chamando o método para imprimir informações do usuário
usuario1.imprimirInformacoes();
