# Crie um programa que leia quanto de dinheiro uma pessoa tem na carteira
# e mostre quantos Dólares ela pode comprar.

reais = float(input('Digite o número em reais: '))
dolar = 4.95
euro = 5.38
print(f' Com {reais:.2f} BRL você consegue comprar {reais / dolar:.2f} USD / {reais / euro:.2f} EUR')
