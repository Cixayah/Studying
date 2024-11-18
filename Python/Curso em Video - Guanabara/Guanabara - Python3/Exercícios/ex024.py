# Crie um programa que leia o nome de uma cidade e diga se ela começa ou não com o nome "SANTO".

city = str(input('Digite o nome de uma cidade: ')).strip()
city = city.upper() #caps
print('A cidade começa com "SANTO"? {}'.format('SANTO' in city.split()[0]))

# Solução do Guanabara
cid = str(input('Em que cidade você nasceu? ')).strip()
print(cid[:5].upper() == 'SANTO')