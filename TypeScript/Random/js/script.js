"use strict";
function perguntarIdade() {
    const idade = prompt("Qual é a sua idade?");
    if (idade !== null) {
        alert(`Você tem ${idade} anos.`);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao');
    if (botao) {
        botao.addEventListener('click', perguntarIdade);
    }
});
