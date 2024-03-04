#Faça um programa que leia a largura e a altura de uma parede em metros,
#calcule a sua área e a quantidade de tinta necessária para pinta-la,
#sabendo que cada litro de tinta pinta área de 2m².

l = float(input('Digite a largura em metros: '))
a = float(input('Digite a altura em metros: '))
area = l * a
tinta = area / 2
print(f'A área da sua parede é: {area:.2f} metros quadrados!')
print(f'Para pintar essa parede, será necessário {tinta:.2f} litros de tinta')