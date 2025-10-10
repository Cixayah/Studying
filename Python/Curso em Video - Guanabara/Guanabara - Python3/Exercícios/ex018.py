# Faça um programa que leia um ângulo qualquer e mostre na tela o valor do seno, casseno e tangente desse ângulo.

from math import sin, radians, cos, tan

angle = float(input('Digite o ângulo que deseja: '))

sine = sin(radians(angle))
print(f'O ângulo de {angle} tem o SENO de {sine:.2f}')

cosine = cos(radians(angle))
print(f'O ângulo de {angle} tem o COSSENO de {cosine:.2f}')

tangent = tan(radians(angle))
print(f'O ângulo de {angle} tem a TANGENTE de {tangent:.2f}')

