# Faça um programa que leia uma frase pelo teclado e mostre quantas vezes aparece a letra "A", em que posição ela aparece a primeira vez e em que posição ela aparece a última vez.

phrase = str(input('Digite uma frase: ')).strip()
phrase = phrase.upper()
print(f'A frase foi: {phrase}')
print('A letra "A" aparece {} vezes.'.format(phrase.count('A')))
print('A primeira letra "A" aparece na posição {}.'.format(phrase.find('A')+1))
print('A última letra "A" aparece na posição {}.'.format(phrase.rfind('A')+1))
print('Fim do programa.')