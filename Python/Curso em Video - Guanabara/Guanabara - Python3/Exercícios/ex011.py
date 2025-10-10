#Faça um programa que leia a largura e a altura de uma parede em metros,
#calcule a sua área e a quantidade de tinta necessária para pinta-la,
#sabendo que cada litro de tinta pinta área de 2m².

l = float(input('Digite a largura em metros: '))
a = float(input('Digite a altura em metros: '))
area = l * a #Largura x Altura = área (sou de humanas)
tinta = area / 2
print(f'A área da sua parede é de: {area:}m².') #m² = metro quadrado
print(f'Para pintar essa parede, será necessário {tinta}L de tinta.')
