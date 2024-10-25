# Solicita o primeiro nome do usuário
nome = input("Digite seu primeiro nome: ")

# Verifica o comprimento do nome e exibe a mensagem apropriada
if len(nome) <= 4:
    print("Seu nome é curto.")
elif 5 <= len(nome) <= 6:
    print("Seu nome é normal.")
else:
    print("Seu nome é muito grande.")
