# Leia a velocidade do carro, se ultrapassar 80km/h diga que foi multado. A multa irá custar R$7,00 por cada km acima do limite
    
car_speed = 83
if car_speed > 80:
    print(f'Você foi multado!')
    print(f'O valor foi de: R${(car_speed-80)*7:.2f}.')
    
