// app.ts

// Função para exibir um prompt e mostrar a idade
function perguntarIdade(): void {
    const idade = prompt("Qual é a sua idade?");
    if (idade !== null) {
        alert(`Você tem ${idade} anos.`);
    }
}

// Adiciona um ouvinte de eventos ao botão
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao') as HTMLButtonElement;
    if (botao) {
        botao.addEventListener('click', perguntarIdade);
    }
});