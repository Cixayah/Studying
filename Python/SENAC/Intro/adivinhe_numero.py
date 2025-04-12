from os import system
import random

system('cls')

print('Adivinhe o número: ')

secret_number = random.randrange(0,100)

max_attempts = 10

for round in range(1,max_attempts +1):
    print(f'\nTentativa {round:02d} de {max_attempts}')