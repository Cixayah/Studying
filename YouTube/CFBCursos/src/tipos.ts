// Arquivo de tipos e interfaces reutilizáveis

// Exportando tipos
export type Pessoa = {
  nome: string;
  idade: number;
  email?: string;
};

// Exportando interfaces
export interface Curso {
  nome: string;
  cargaHoraria: number;
  professor: string;
}

// Exportando enum
export enum NivelCurso {
  INICIANTE = "Iniciante",
  INTERMEDIARIO = "Intermediário",
  AVANCADO = "Avançado"
}

// Exportando uma classe
export class Estudante {
  private _nome: string;
  private _cursos: Curso[];

  constructor(nome: string) {
    this._nome = nome;
    this._cursos = [];
  }

  get nome(): string {
    return this._nome;
  }

  matricular(curso: Curso): void {
    this._cursos.push(curso);
    console.log(`${this._nome} matriculado no curso ${curso.nome}`);
  }

  listarCursos(): void {
    console.log(`Cursos de ${this._nome}:`);
    this._cursos.forEach((curso, index) => {
      console.log(`${index + 1}. ${curso.nome} - ${curso.cargaHoraria}h - Prof. ${curso.professor}`);
    });
  }
}

// Exportando funções utilitárias
export function saudacao(pessoa: Pessoa): string {
  return `Olá ${pessoa.nome}, você tem ${pessoa.idade} anos!`;
}

export function formatarCargaHoraria(horas: number): string {
  return `${horas}h (${horas * 60}min)`;
}