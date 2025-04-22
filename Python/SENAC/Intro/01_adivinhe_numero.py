from os import system
import random

system('cls')  # Limpa a tela (no Windows)

print('Adivinhe o número!')

# Alteração: mudar para randint(1, 100) para incluir 1 e 100
secret_number = random.randint(1, 100)

max_attempts = 10

for round in range(1, max_attempts + 1):
    print(f'Tentativa {round:02d} de {max_attempts:02d}')
    
    attempt = input('Tente acertar o número de 1 a 100: ')
    
    # Nova proteção: capturar erro se o usuário digitar algo que não seja número
    try:
        attempts_int = int(attempt)
    except ValueError:
        print('Digite apenas números válidos!')
        continue

    # Alteração: Checar se o número está fora do intervalo
    if attempts_int < 1 or attempts_int > 100:
        print('Tentativa inválida. Somente números de 1 a 100.')
        continue

    print('Você digitou', attempts_int)

    if attempts_int == secret_number:
        print('Acertou!!')
        break
    elif attempts_int > secret_number:
        print('Você errou! Sua tentativa foi maior que o número!')
    else:
        print('Você errou! Sua tentativa foi menor que o número!')

# Depois do loop
print(f'\nO número secreto sorteado foi: {secret_number}.')
print('\nObrigado por jogar!\n')
