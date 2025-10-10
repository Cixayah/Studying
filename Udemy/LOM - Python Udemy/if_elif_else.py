while True:
    login = input('Você quer entrar ou sair? ')
    if login == 'entrar':
        print('Entrou legal')
    elif login == 'sair':
        print('Obrigado por usar o programa')
        break
    else:
        print('Digite apenas "entrar" ou "sair"')
