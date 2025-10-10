while True:
    name = input("Qual seu nome? ").strip().capitalize()
    print(name)

    q = input(f'{name}, deseja continuar? (sim/não) ').strip().lower()
    if q == 'sim':
        print("Vamos continuar!")
    elif q == 'não':
        print("Tchau!")
        break
    else:
        print("Resposta inválida. Por favor, digite 'sim' ou 'não'.")
