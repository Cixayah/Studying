import random

def validate_input(message):
    # Valida a entrada do usuário, garantindo que seja um número entre 1 e 100.
    while True:
        try:
            value = int(input(message))
            if 1 <= value <= 100:
                return value
            else:
                print("Por favor, digite um número entre 1 e 100.")
        except ValueError:
            print("Entrada inválida! Digite apenas números.")

def play_guessing_game():
    # Configurações do jogo
    secret_number = random.randint(1, 100)
    max_attempts = 10
    attempts = 0
    
    print("\n=== Bem-vindo ao Jogo de Adivinhação! ===")
    print(f"Você tem {max_attempts} tentativas para adivinhar o número entre 1 e 100.")
    
    while attempts < max_attempts:
        # Mostrar tentativas restantes
        remaining_attempts = max_attempts - attempts
        print(f"\nTentativas restantes: {remaining_attempts}")
        
        # Pedir e validar o palpite
        guess = validate_input("Digite seu palpite (1-100): ")
        attempts += 1
        
        # Verificar se acertou
        if guess == secret_number:
            print(f"\nPARABÉNS! Você acertou em {attempts} tentativas!")
            return True
            
        # Dar dicas
        difference = abs(guess - secret_number)
        if difference <= 3:
            print("🔥 Você está MUITO perto!")
        elif difference <= 10:
            print("😮 Está ficando quente...")
        
        # Indicar se é maior ou menor
        if guess < secret_number:
            print("⬆️ Muito baixo!")
        else:
            print("⬇️ Muito alto!")
    
    # Se acabaram as tentativas
    print(f"\nGame Over! O número secreto era {secret_number}.")
    return False

def main():
    while True:
        play_guessing_game()
        
        # Perguntar se quer jogar novamente
        play_again = input("\nQuer jogar novamente? (s/n): ").lower()
        if play_again != 's':
            print("\nObrigado por jogar! Até a próxima!")
            break

if __name__ == "__main__":
    main()