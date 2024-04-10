# Um professor quer sortear um dos seus quatro alunos para apagar o quadro. Faça um programa que ajude ele, lendo o nome deles e escrevendo o nome do escolhido.

from random import choice
from os import system
'''n1 = str(input('Primeiro aluno: '))
n2 = str(input('Segundo aluno: '))
n3 = str(input('Terceiro aluno: '))
n4 = str(input('Quarto aluno: '))'''

#Testes.

#console clear
system('clear')
list = ['Larissa', 'Gabriel', 'Lara', 'Alex']
the_chosen = choice(list)
print(f'O escolhido foi: {the_chosen}.')


