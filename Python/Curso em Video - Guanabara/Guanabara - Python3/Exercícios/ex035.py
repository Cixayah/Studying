#Desenvolva um programa que leia o comprimento de três retas e diga ao usuário se elas podem ou não formar um triangulo

a = float(input("Digite o comprimento da primeira reta: "))
b = float(input("Digite o comprimento da segunda reta: "))
c = float(input("Digite o comprimento da terceira reta: "))

if a + b > c and a + c > b and b + c > a:
    print("As retas PODEM formar um triângulo.")
else:
    print("As retas NÃO PODEM formar um triângulo.")
