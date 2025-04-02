while True:
    time = int(input('Quantos anos tem seu carro? '))
    if time <= 3:
        print('Carro novo')
    else:
        print('Carro velho')

    question = input('Deseja continuar? (s/n) ').strip().lower()
    if question == 'n':
        print('Fim do programa')
        break
