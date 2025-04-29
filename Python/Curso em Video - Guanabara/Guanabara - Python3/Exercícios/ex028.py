#Escreva um programa que faça o computador "pensar" em um número inteiro entre 0 e 5, peça para o usuário tentar descobrir qual foi o número escolhido. O programa deverá escrever na tela se o usuário venceu ou perdeu.

import random

pc_number = random.randrange(1,6)
while True:
    user_try = int(input('Tente adivinhar o número escolhido: '))
    if user_try == pc_number:
        print(f'Parabéns, você acertou! O número era {pc_number}')
        break
    else:
        print('Errou! Tente novamente.')
    
