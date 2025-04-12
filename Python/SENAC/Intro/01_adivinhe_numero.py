from os import system
import random

system('cls')

print('Adivinhe o número: ')

secret_number = random.randrange(0,100)

max_attempts = 10

for round in range(1, max_attempts + 1):
    print(f'Tentativa {round:02d} de {max_attempts:02d}')
    
    attempt = input('Tente acertar o número de 1 a 100: ')
    print('Você digitou', attempt)

    attempts_int = int(attempt)
    if attempts_int < 1 or attempts_int > 100:
        print('Tentativa inválida. Somente números de 1 a 100.')
        continue
    
    accept_num = attempts_int == secret_number
    bigger = attempts_int > secret_number
    lower = attempts_int < secret_number
    if (accept_num):
        print('Acertou!!')
        break
    else:
        print('Você errou!')
        
        if(bigger):
            print('Sua tentativa foi maior que o número!')
        if(lower):
            print('Sua tentativa foi menor que o número!')
print(f'O número secreto sorteado foi: {secret_number}.')
print('\nObrigado por jogar\n')