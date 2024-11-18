# Faça um programa que leia uma frase pelo teclado e mostre quantas vezes aparece a letra "A", em que posição ela aparece a primeira vez e em que posição ela aparece a última vez.

name = str(input('Digite uma frase: ')).strip()
name = name.upper()
print('A letra "A" aparece {} vezes.'.format(name.count('A')))
print('A primeira letra "A" aparece na posição {}.'.format(name.find('A')+1))
print('A última letra "A" aparece na posição {}.'.format(name.rfind('A')+1))
print('Fim do programa.')