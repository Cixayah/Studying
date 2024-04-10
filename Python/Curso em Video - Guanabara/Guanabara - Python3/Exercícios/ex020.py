# O mesmo professor do desafio anterior quer sortear a ordem de apresentação de trabalhos dos alunos. Faça um programa que leia o nome dos quatro alunos e mostre a ordem sorteada.
from random import choice, shuffle
from os import system

#Array
names = ['Larissa', 'Gabriel', 'Lara', 'Alex']

#console clear
system('clear')

'''for i in range(4):
    the_chosen = choice(names)
    names.remove(the_chosen)
    print(f'A ordem será: {the_chosen}.')'''
    
#Correção
shuffle(names)
print(f'Esta será a ordem: {names}')
