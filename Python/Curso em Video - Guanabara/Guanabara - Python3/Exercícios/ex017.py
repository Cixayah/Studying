# Faça um programa que leia o comprimento do cateto oposto e do cateto adjacente de um triângulo retângulo, calcule e mostre o cumprimento da hipotenusa.
from math import sqrt, hypot

a = float(input("Informe o valor do cateto oposto: "))
b = float(input("Informe o valor do cateto adjacente: "))
c = sqrt(a ** 2 + b ** 2)
print(f'O valor da hipotenusa é: {c:.2f}!')


#correção
a2 = float(input("Informe o valor do cateto oposto: "))
b2 = float(input("Informe o valor do cateto adjacente: "))
c2 = hypot(a2, b2)
print(f'O valor da hipotenusa é: {c2:.2f}!')
