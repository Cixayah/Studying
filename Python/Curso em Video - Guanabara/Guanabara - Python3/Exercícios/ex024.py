# Crie um programa que leia o nome de uma cidade e diga se ela começa ou não com o nome "SANTO".

city = str(input('Digite o nome de uma cidade: ')).strip()
city = city.upper()
print('A cidade começa com "SANTO"? {}'.format('SANTO' in city.split()[0]))
# city = city.split()
# print('A cidade começa com "SANTO"? {}'.format('SANTO' in city[0]))
# print('A cidade começa com "SANTO"? {}'.format(city[0] == 'SANTO'))
# print('A cidade começa com "SANTO"? {}'.format(city[0].find('SANTO')))