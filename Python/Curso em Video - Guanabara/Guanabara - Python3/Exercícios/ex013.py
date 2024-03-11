# Faça um algoritmo que leia o o salário de um funcionário
# e mostre seu novo salário com 15% de aumento

n = float(input('Digite seu salário: '))
ns = n + (n * 0.15)
print(f'Seu novo salário com 15% de aumento agora é de R${ns:.2f} ')

# correção prof Guanabara
n = float(input('Digite seu salário: '))
ns = n + (n * 15 / 100)
print(f'Seu novo salário com 15% de aumento agora é de R${ns:.2f} ')
