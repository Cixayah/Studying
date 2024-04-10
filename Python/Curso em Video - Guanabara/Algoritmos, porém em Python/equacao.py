import math

a_value = int(input('Informe o valor de A: '))
b_value = int(input('Informe o valor de B: '))
c_value = int(input('Informe o valor de C: '))

print(f"Sua equação é: {a_value}x^2 + {b_value}x + {c_value} = 0")

delta = (b_value**2) - (4*a_value*c_value)
print(f"O valor do Delta é: {delta}")

if delta > 0:
    x1 = (-b_value + math.sqrt(delta)) / (2*a_value)
    x2 = (-b_value - math.sqrt(delta)) / (2*a_value)
    print(f"As raízes da equação são: x1 = {x1} e x2 = {x2}")
elif delta == 0:
    x = -b_value / (2*a_value)
    print(f"A equação possui apenas uma raiz real: x = {x}")
else:
    print("A equação não possui raízes reais.")
