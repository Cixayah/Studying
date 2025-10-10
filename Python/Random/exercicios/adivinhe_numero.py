import random

def validate_input(message):
    while True:
        try:
            value = int(input(message))
            if 1 <= value <= 100:
                return value
            print("Número fora do intervalo!")
        except ValueError:
            print("Entrada inválida!")

def play_game():
    secret = random.randint(1, 100)
    for attempts in range(1, 11):
        guess = validate_input(f"Tentativa {attempts}/10 - Adivinhe (1-100): ")
        if guess == secret:
            print(f"🎉 Acertou em {attempts} tentativas!")
            return
        hint = "🔥 Muito perto!" if abs(guess - secret) <= 3 else "😮 Quente!" if abs(guess - secret) <= 10 else ""
        print(f"{hint} {'⬆️ Mais alto!' if guess < secret else '⬇️ Mais baixo!'}")
    print(f"Game Over! O número era {secret}.")

while input("Jogar? (s/n): ").lower() == 's':
    play_game()

print("Obrigado por jogar!")
