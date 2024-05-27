document.addEventListener('DOMContentLoaded', function () {
  // Selecione o botão de entrada
  const enterBtn: HTMLButtonElement | null = document.querySelector('.primary');

  if (enterBtn) {
    // Adicione um evento de clique ao botão de entrada
    enterBtn.addEventListener('click', function () {
      // Selecione o campo de entrada
      const nameInput: HTMLInputElement | null =
        document.querySelector('#name');

      if (nameInput) {
        // Obtenha o valor inserido no campo de entrada
        const name: string = nameInput.value.trim();

        // Selecione o elemento que exibe a mensagem de boas-vindas
        const welcomeMessage: HTMLElement | null =
          document.querySelector('.subtitle');

        if (welcomeMessage) {
          // Verifique se o campo não está vazio
          if (name !== '') {
            // Se não estiver vazio, exiba a mensagem de boas-vindas com o nome fornecido
            welcomeMessage.textContent = `Bem-Vind@, ${name}!`;
          } else {
            // Se o campo estiver vazio, exiba uma mensagem de erro
            alert('Por favor, informe seu nome.');
          }
        }
      }
    });
  }

  // Selecione o botão de saída
  const exitBtn: HTMLButtonElement | null =
    document.querySelector('.secondary');

  if (exitBtn) {
    // Adicione um evento de clique ao botão de saída
    exitBtn.addEventListener('click', function () {
      // Limpe o valor do campo de entrada
      const nameInput: HTMLInputElement | null =
        document.querySelector('#name');

      if (nameInput) {
        nameInput.value = '';

        // Selecione o elemento que exibe a mensagem de boas-vindas
        const welcomeMessage: HTMLElement | null =
          document.querySelector('.subtitle');

        if (welcomeMessage) {
          // Redefina a mensagem de boas-vindas para o valor padrão
          welcomeMessage.textContent = 'Welcome, ';
        }
      }
    });
  }
});
