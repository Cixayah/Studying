try:
    hora = int(input("Que horas são? (Digite apenas a hora em formato 24h): "))

    if 0 <= hora <= 11:
        print("Bom dia!")
    elif 12 <= hora <= 17:
        print("Boa tarde!")
    elif 18 <= hora <= 23:
        print("Boa noite!")
    else:
        print("Hora inválida! Digite um número entre 0 e 23.")
except ValueError:
    print("Por favor, digite um número inteiro válido.")
