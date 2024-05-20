# baixo = 0
# alto = len(lista) - 1
# meio = (baixo + alto) // 2
# meio será arredondado para baixo automaticamente pelo Python se (baixo+alto) não for um número par. Se o chute for muito baixo, você atualizará a variável baixo proporcionalmente.

# if chute < item:
#     baixo = meio + 1

# Se o chute for muito alto, você atualizará a variável alto. Aqui está o código completo:


def pesquisa_binaria(lista, item):
    baixo = 0
    alto = len(lista) - 1

    while baixo <= alto:
        meio = (baixo + alto) // 2
        chute = lista[meio]
        if chute == item:
            return meio
        if chute > item:
            alto = meio - 1
        else:
            baixo = meio + 1
    return None


minha_lista = [1, 3, 5, 7, 9]
print(pesquisa_binaria(minha_lista, 3))  # => 1
print(pesquisa_binaria(minha_lista, -1))  # => None
