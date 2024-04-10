# Faça um algoritmo que leia o preço de um produto e mostre
# seu novo preço com 5% de desconto
n = float(input('Digite o valor do produto: '))
np = n - (n * 0.05)
print(f'O valor de R${n:.2f} com 5% de desconto é R${np:.2f}')
