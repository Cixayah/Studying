# Crie um programa que leia um número Real qualquer pelo teclado e mostre na tela a sua porção inteira. EX: Digite um número: 6.127. O número 6.127 tem a parte inteira 6.

'''from math import trunc
num = float(input('Digite um valor: '))
print(f'Você digitou {num} e o valor inteiro é {trunc(num)}!') '''

# Sem importação
num = float(input('Digite um valor: '))
print(f'O valor digitado foi {num} e sua porção inteira é: {int(num)}!')