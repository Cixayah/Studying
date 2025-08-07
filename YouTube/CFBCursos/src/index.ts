// Exemplo básico de TypeScript

// Importando tipos, interfaces, classes e funções do módulo tipos.ts
import { Pessoa, Curso, Estudante, NivelCurso, saudacao, formatarCargaHoraria } from './tipos';

// Demonstração de uso de módulos em TypeScript

// Uso dos tipos e funções importados
const aluno: Pessoa = {
  nome: "João",
  idade: 25,
  email: "joao@exemplo.com"
};

// Criando cursos com diferentes níveis
const cursoTypeScript: Curso = {
  nome: "TypeScript Fundamentos",
  cargaHoraria: 20,
  professor: "Maria Silva"
};

const cursoAvancado: Curso = {
  nome: `TypeScript ${NivelCurso.AVANCADO}`,
  cargaHoraria: 40,
  professor: "Carlos Oliveira"
};

// Usando a classe importada
const estudante = new Estudante(aluno.nome);
estudante.matricular(cursoTypeScript);
estudante.matricular(cursoAvancado);
estudante.listarCursos();

// Usando funções importadas
console.log(saudacao(aluno));
console.log(`Carga horária do curso avançado: ${formatarCargaHoraria(cursoAvancado.cargaHoraria)}`);

// Demonstração de tipos genéricos
function primeiroElemento<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

const numeros = [1, 2, 3, 4, 5];
const palavras = ["TypeScript", "JavaScript", "Node.js"];

console.log(`Primeiro número: ${primeiroElemento(numeros)}`);
console.log(`Primeira palavra: ${primeiroElemento(palavras)}`);

// Exemplo de uso de tipos com union
type Resultado = string | number | boolean;

function processarEntrada(valor: Resultado): void {
  if (typeof valor === "string") {
    console.log(`Texto: ${valor.toUpperCase()}`);
  } else if (typeof valor === "number") {
    console.log(`Número: ${valor.toFixed(2)}`);
  } else {
    console.log(`Booleano: ${valor ? "Verdadeiro" : "Falso"}`);
  }
}

processarEntrada("typescript");
processarEntrada(3.14159);
processarEntrada(true);