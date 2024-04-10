#Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de 
#dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60.00 por dia e R$0.15 por Km rodado.


qtd_days = int(input('Quantos dias?: '))
qtd_km = float(input('Quantos km?: '))

day_price = 60.00
km_price = 00.15

total = (qtd_km * km_price) + (qtd_days * day_price)
print(f'O total é a pagar é: R${total:.2f}')
