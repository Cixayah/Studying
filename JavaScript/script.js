// Esperando o DOM carregar completamente antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    // Obtendo referências aos elementos do DOM que vamos manipular
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const itemList = document.getElementById('itemList');
    const itemCount = document.getElementById('itemCount');

    // Contador para manter o número total de itens
    let totalItems = 0;

    // Função para atualizar o contador de itens na interface
    const updateItemCount = () => {
        itemCount.textContent = totalItems;
    };

    // Função para criar um novo item na lista
    const createListItem = (text) => {
        // Criando um novo elemento li
        const li = document.createElement('li');

        // Adicionando o texto ao elemento
        li.textContent = text;

        // Criando o botão de remover
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.style.marginLeft = '10px';

        // Adicionando evento de clique ao botão de remover
        deleteButton.addEventListener('click', () => {
            // Removendo o item da lista
            li.remove();
            // Decrementando o contador
            totalItems--;
            // Atualizando o contador na interface
            updateItemCount();
        });

        // Adicionando o botão ao item da lista
        li.appendChild(deleteButton);

        return li;
    };

    // Função para adicionar um novo item
    const addItem = () => {
        // Obtendo o texto do input e removendo espaços em branco
        const text = itemInput.value.trim();

        // Verificando se o texto não está vazio
        if (text) {
            // Criando e adicionando o novo item à lista
            const newItem = createListItem(text);
            itemList.appendChild(newItem);

            // Incrementando o contador
            totalItems++;
            // Atualizando o contador na interface
            updateItemCount();

            // Limpando o input
            itemInput.value = '';
        }
    };

    // Adicionando evento de clique ao botão
    addButton.addEventListener('click', addItem);

    // Adicionando evento de tecla ao input (para permitir adicionar com Enter)
    itemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    });
});