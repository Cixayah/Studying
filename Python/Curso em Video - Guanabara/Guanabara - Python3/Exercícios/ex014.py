# Escreva um programa que converta uma temperatura digitada em ºC para ºF

c = float(input('Informe a temperatura em ºC: '))
f = c * 9 / 5 + 32  # Regra de precedência
print(f'A temperatura de {c}ºC corresponde a {f}ºF!')
