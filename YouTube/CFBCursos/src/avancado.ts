// Exemplos de recursos avançados do TypeScript

// 1. Tipos utilitários
type Usuario = {
  id: number;
  nome: string;
  email: string;
  ativo: boolean;
  perfil: {
    nivel: string;
    pontos: number;
  };
};

// Partial - torna todas as propriedades opcionais
type UsuarioAtualizacao = Partial<Usuario>;

// Pick - seleciona apenas algumas propriedades
type UsuarioBasico = Pick<Usuario, 'id' | 'nome'>;

// Omit - remove propriedades específicas
type UsuarioSemId = Omit<Usuario, 'id'>;

// Readonly - torna todas as propriedades somente leitura
type UsuarioImutavel = Readonly<Usuario>;

// 2. Tipos condicionais
type EhString<T> = T extends string ? true : false;

// 3. Tipos mapeados
type Opcional<T> = {
  [P in keyof T]?: T[P];
};

type Obrigatorio<T> = {
  [P in keyof T]-?: T[P];
};

// 4. Tipos de interseção
type Identificavel = {
  id: number;
};

type Nomeavel = {
  nome: string;
};

type Entidade = Identificavel & Nomeavel;

// 5. Tipos de união discriminada
type Forma =
  | { tipo: 'circulo'; raio: number }
  | { tipo: 'retangulo'; largura: number; altura: number }
  | { tipo: 'triangulo'; base: number; altura: number };

function calcularArea(forma: Forma): number {
  switch (forma.tipo) {
    case 'circulo':
      return Math.PI * forma.raio ** 2;
    case 'retangulo':
      return forma.largura * forma.altura;
    case 'triangulo':
      return (forma.base * forma.altura) / 2;
  }
}

// 6. Genéricos com restrições
function obterPropriedade<T, K extends keyof T>(obj: T, chave: K): T[K] {
  return obj[chave];
}

// 7. Decoradores (experimental)
// Para usar decoradores, é necessário habilitar experimentalDecorators no tsconfig.json
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Chamando ${propertyKey} com argumentos: ${JSON.stringify(args)}`);
    const resultado = metodoOriginal.apply(this, args);
    console.log(`Resultado: ${JSON.stringify(resultado)}`);
    return resultado;
  };

  return descriptor;
}

// 8. Tipos de tupla
type Coordenada = [number, number];
type RGB = [number, number, number];

// 9. Tipos literais
type Direcao = 'norte' | 'sul' | 'leste' | 'oeste';
type StatusHttp = 200 | 404 | 500;

// 10. Tipos de template literal
type EventoMouse = `mouse${"up" | "down" | "move"}`;
type PropCss = `margin${"-top" | "-bottom" | "-left" | "-right"}`;

// Exportando exemplos para uso
export {
  type Usuario,
  type UsuarioAtualizacao,
  type UsuarioBasico,
  type UsuarioSemId,
  type UsuarioImutavel,
  type EhString,
  type Opcional,
  type Obrigatorio,
  type Identificavel,
  type Nomeavel,
  type Entidade,
  type Forma,
  calcularArea,
  obterPropriedade,
  log,
  type Coordenada,
  type RGB,
  type Direcao,
  type StatusHttp,
  type EventoMouse,
  type PropCss
};