import os,time


def cls():
    os.system('cls' if os.name == 'nt' else 'clear')

#1
print('Soma de dois números')
ask_number1 = int(input('Digite o primeiro número: '))
ask_number2 = int(input('Digite o segundo número: '))
print(f'O resultado da soma dos dois números é {ask_number1+ask_number2}.')
time.sleep(5)
cls()


#2
print('Número par ou ímpar')
ask_par_impar = int(input('Digite o número: '))
if ask_par_impar % 2:
    print(f'{ask_par_impar} é impar.')
else:
    print(f'{ask_par_impar} é par.')
time.sleep(5)
cls()


#3
print('Calculadora simples')
ask_num_calc1 = int(input('Digite o primeiro número: '))
ask_num_calc2 = int(input('Digite o segundo número: '))
ask_num_value = str(input('Escolha a calculadora(+ - x /) '))
num_results = 0
if ask_num_value == '+':
    num_results = ask_num_calc1 + ask_num_calc2
elif ask_num_value == '-':
    num_results = ask_num_calc1 - ask_num_calc2
elif ask_num_value == 'x':
    num_results = ask_num_calc1 * ask_num_calc2
elif ask_num_value == '/':
    num_results = ask_num_calc1 / ask_num_calc2
print(f'{ask_num_calc1} {ask_num_value} {ask_num_calc2} = {num_results}')
time.sleep(5)
cls()   

    
#4
print('for 1 até 10')
for i in range (1,11):
    print(i)
time.sleep(5)
cls()
    

#5
print('Tabuada')
num = (int(input('Deseja saber qual tabuada? ')))
for i in range (1,11):
    print(f'{num} x {i} = {num*i}')
time.sleep(5)
cls()

#6
print('Contador regressivo')
for y in range (11,1):
    print(y)

#7
print('Senha correta(python123): ')
ask_pswd_input = input('Digite a senha: ')
if ask_pswd_input == 'python123':
    print('Senha correta!')
else:
    print('Senha inválida.')
time.sleep(5)
cls()
print('Obrigado por utilizar o programa.')
    