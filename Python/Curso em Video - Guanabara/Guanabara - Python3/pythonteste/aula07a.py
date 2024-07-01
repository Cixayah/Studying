# nome = input('Digite seu nome: ')
# print(f'Prazer em te conhecer {nome * 10}')
n1 = int(input('Um valor: '))
n2 = int(input('Outro valor: '))
# print('A soma vale{}'.format(n1 + n2))
s = n1 + n2
m = n1 * n2
d = n1 / n2
di = n1 // n2
e = n1 ** n2
print(f'A soma {s},\n o produto é {m} \n e a divisão é {d:.2f}', end=' ')
print(f'a divisão inteira {di} e a potência {e}')
