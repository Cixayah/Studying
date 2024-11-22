import random
secret_number = random.randint(1, 10)
guess = 0
while guess != secret_number:
    guess = int(input("Adivinhe o número (1-10): "))
    if guess < secret_number:
        print("Muito baixo!")
    elif guess > secret_number:
        print("Muito alto!")
print("Parabéns! Você acertou!")
