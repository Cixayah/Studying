function calcularIMC(peso: number, altura: number): void {
    const imc = peso / (altura * altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    // Array com as categorias (fundamento: Estrutura de Dados/Array)
    const categorias = [
        { limite: 18.5, status: "Magreza" },
        { limite: 25.0, status: "Peso Normal" },
        { limite: 30.0, status: "Sobrepeso" },
        { limite: Infinity, status: "Obesidade" } // Infinity pega todos os valores acima
    ];

    // Estrutura de Repetição (for) para achar a categoria
    let statusEncontrado = "Não definido";
    for (const categoria of categorias) {
        if (imc < categoria.limite) {
            statusEncontrado = categoria.status;
            break; // Para o loop assim que encontrar (fundamento: Repetição com interrupção)
        }
    }

    // Saída
    console.log(`Categoria: ${statusEncontrado}`);
}

// Exemplo:
calcularIMC(103, 1.77); 