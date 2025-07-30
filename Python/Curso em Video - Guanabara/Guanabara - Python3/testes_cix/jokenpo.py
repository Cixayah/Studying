import random

def play_jokenpo():
    options = ["pedra", "papel", "tesoura"]
    computer_choice = random.choice(options)

    while True:
        user_choice = input("Pedra, papel ou tesoura? \n").lower()
        if user_choice in options:
            break
        else:
            print("Escolha inválida! Por favor, escolha entre pedra, papel ou tesoura.")

    print(f"Você escolheu: {user_choice}")
    #print(f"O computador escolheu: {computer_choice}")

    if user_choice == computer_choice:
        print(f"Empatamos, ambos escolhemos {computer_choice} kkkk")
    elif (
        (user_choice == "pedra" and computer_choice == "tesoura") or
        (user_choice == "tesoura" and computer_choice == "papel") or
        (user_choice == "papel" and computer_choice == "pedra")
    ):
        print(f"Você ganhou! Eu escolhi {computer_choice}. :(")
    else:
        print(f"Eu venci! {computer_choice} ganha de {user_choice}.")

# Para jogar, chame a função:
play_jokenpo()