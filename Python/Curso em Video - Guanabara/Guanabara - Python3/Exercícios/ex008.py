# Escreva um programa que leia um valor em metros e exiba convertido em cm e mm
n = float(input('Digite o valor em metros: '))

# Conversão
cm = n * 100
mm = n * 1000
print(f'O valor em centimetros é {cm:.2f}cm')
print(f'O valor em milimetros é {mm:.2f}m')
