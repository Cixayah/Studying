from os import system,name
import random

option = 's'
while option.upper() == 'S':
    system('cls')  if(name == 'nt') else system('clear')
    
    cpu = random.randint(0,2)
    player = int(input('''Escolha uma opção para jogar: 
                       [1] Pedra
                       [2] Papel
                       [3] Tesoura
                       Digite sua escolha: '''))-1
    opt_choices = ('Pedra','Papel', 'Tesoura')
    table = (
        ('NINGUÉM','JOGADOR','CPU'),
        ('CPU','NINGUÉM','JOGADOR'),
        ('JOGADOR','CPU','NINGUÉM')
    )
    
    print(f'Você escolheu{opt_choices[player]}')
    print(f'A CPU escolheu')
    print(f'')
    opt_choices=input('Jogar novamente?')