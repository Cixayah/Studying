# Ambiente de Estudos TypeScript - CFB Cursos

Este é um ambiente configurado para aulas de TypeScript, baseado nos cursos do canal CFB Cursos.

## Estrutura do Projeto

```
/
├── src/              # Código fonte TypeScript
│   ├── index.ts      # Arquivo principal com exemplos
│   ├── tipos.ts      # Definições de tipos, interfaces e classes
│   └── avancado.ts   # Exemplos de recursos avançados do TypeScript
├── dist/             # Código compilado (gerado automaticamente)
├── package.json      # Configurações do projeto
├── tsconfig.json     # Configurações do TypeScript
└── .gitignore        # Arquivos ignorados pelo Git
```

## Requisitos

- Node.js (versão 14 ou superior)
- npm (normalmente instalado com o Node.js)

## Instalação

```bash
# Instalar dependências
npm install
```

## Scripts Disponíveis

```bash
# Compilar o código TypeScript
npm run build

# Compilar em modo de observação (watch mode)
npm run dev

# Executar o código compilado
npm start

# Executar o código TypeScript diretamente (sem compilação prévia)
npm run dev:run
```

## Exemplos Incluídos

### Básicos (`src/index.ts` e `src/tipos.ts`)

- Definição de tipos e interfaces
- Classes em TypeScript
- Funções com tipagem
- Tipos genéricos
- Propriedades opcionais
- Módulos e importações
- Enums
- Union types

### Avançados (`src/avancado.ts`)

- Tipos utilitários (Partial, Pick, Omit, Readonly)
- Tipos condicionais
- Tipos mapeados
- Tipos de interseção
- Tipos de união discriminada
- Genéricos com restrições
- Decoradores (experimental)
- Tipos de tupla
- Tipos literais
- Tipos de template literal

## Recursos Adicionais

- [Documentação oficial do TypeScript](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play) - Experimente TypeScript no navegador
- [Canal CFB Cursos no YouTube](https://www.youtube.com/cfbcursos)