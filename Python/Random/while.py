# Exemplo 1: Contagem crescente
count = 0
while count <= 5:
    print(count)
    count += 1
    
print() # Pular linha
    
# Exemplo 2: Contagem regressiva
count = 5
while count >= 0:
    print(count)
    count -= 1

# Exemplo 3: Pedindo uma senha
senha = ""
while senha != "123":
    senha = input("Digite a senha: ")
print("Senha correta!")
