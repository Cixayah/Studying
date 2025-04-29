# Leia três números e mostre qual é o maior e o menor.

n1 = int(input('Digite o número 1: '))
n2 = int(input('Digite o número 2: '))
n3 = int(input('Digite o número 3: '))

#maior
if n1 >= n2 and n1 >= n3:
    largest = n1
elif n2 >= n1 and n2 >= n3:
    largest = n2
else:
    largest = n3

#menor
if n1 <= n2 and n1 <= n3:
    smallest = n1
elif n2 <= n1 and n2 <= n3:
    smallest = n2
else:
    smallest = n3

print(f'O maior é {largest} e o menor é {smallest} ')