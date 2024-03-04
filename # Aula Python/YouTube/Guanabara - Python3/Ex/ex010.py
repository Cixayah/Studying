# Crie um programa que leia quanto de dinheiro uma pessoa tem na carteira
# e mostre quantos Dólares ela pode comprar.

reais = float(input('Digite o número em reais: '))
dolar = 4.95
print(f' Com {reais} BRL você consegue comprar {reais / dolar:.2f} USD')
