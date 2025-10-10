# Crie um programa que leia o nome de uma pessoa e diga se ela tem "SILVA" no nome.

name = str(input('Digite o nome de uma pessoa: ')).strip()
print('O nome tem "SILVA"? {}'.format('SILVA' in name.lower()))