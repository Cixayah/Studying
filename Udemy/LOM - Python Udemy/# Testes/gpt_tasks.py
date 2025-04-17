#1 Soma dos ímpares
sum = 0
for i in range(1,101, 2):
    sum+=i
print(sum)
# optional
soma = 0
for i in range(1, 101):
    if i % 2 != 0:
        soma += i
print(soma)


#2 Número primo
def is_pr(n):
    if n < 2:
        return False
    for y in range(2, int(n ** 0.5) + 1):
        if n % y == 0:
            return False
    return True
number = int(input("Digite um número: "))
if is_pr(number):
    print('É primo!')
else:
    print('Não é primo!')
    
    
#3 Sequência de Fibonacci
nf = int(input('Quantos números de Fibonacci? '))
a, b, = 0, 1
for _ in range(nf):
    print(a, end = " ")
    a, b = b, a+b    

#4 Inverter uma String

text = input('Digite uma palavra: ')
invert_string = text[::-1]
print(invert_string) 


#5 Contar vogais
text_v = input('Digite uma frase: ').lower()
vog = 'aeiou'
count_v = 0

for letter in text_v:
    if letter in vog:
        count_v +=1
print(f'O número de vogais é: {count_v}.')

#6 Lista de quadrados
squares = [x**2 for x in range (1,21)]
print(squares)


#7 Validador de senha
pswd = input('Digite uma senha: ')
hv_caps = any(c.isupper() for c in pswd)
hv_number = any(c.isdigit() for c in pswd)
hv_size = len(pswd) >= 8

if hv_size and hv_caps and hv_number:
    print('Senha válida!')
else:
    print('Senha inválida! Motivos: ')
    if not hv_size: 
        print('Menos de 8 caracteres!')
    if not hv_caps: 
        print('Não tem letra maiúscula!')
    if not hv_number: 
        print('Não tem números!')