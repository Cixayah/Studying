# Pergunte a distância de uma viagem em km e calcule o preço da passagem cobrando R$0.50 por km para viagens de até 200km e R0.45 para viagens mais longas.

km_distance = 200

travel_km = float(input('Quantos km? '))
if travel_km < km_distance:
    print(f'Menos de {km_distance}km! O preços será R${travel_km * 0.50}')
elif travel_km > km_distance:
    print(f'Mais de {km_distance}km! O preços será R${travel_km * 0.45}')
    