# Faça um programa que leia um numero inteiro qualquer e mostre na tela a sua tabuada.
n = int(input('Digite o número para saber a tabuada: '))
for c in range(1, 11):
    total = n * c
    print(f'{n} x {c} = {total}')
