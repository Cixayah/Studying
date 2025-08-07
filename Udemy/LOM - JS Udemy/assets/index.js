document.getElementById('buttonClick').addEventListener('click', function () {
    // Gerar um código de cor hexadecimal aleatório
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Mudar a cor de fundo do botão para a cor aleatória
    this.style.backgroundColor = randomColor;
});
