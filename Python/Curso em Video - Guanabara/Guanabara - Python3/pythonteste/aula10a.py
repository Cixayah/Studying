name = str(input('Qual seu nome? ').strip().lower())
if name == 'cix':
    print(f'Olá administrador {name.capitalize()}.')
else:
    print(f'Olá usuário {name.capitalize()}.')