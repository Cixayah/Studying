#if else
name = str(input('Qual seu nome? ').strip().lower())
if name == 'cix':
    print(f'Olá administrador {name.capitalize()}.')
else:
    print(f'Olá usuário {name.capitalize()}.')
    
n1 = float(input('Digite a primeira nota: '))
n2 = float(input('Digite a segunda nota: '))
m = (n1+n2)/2 
print(f'A sua média foi {m:.1f}')
if m >= 6:
    print('Aprovado(a)!')
else:
    print('Reprovado(a)!')
print('PARABÉNS' if m >=6 else 'ESTUDE MAIS!')
