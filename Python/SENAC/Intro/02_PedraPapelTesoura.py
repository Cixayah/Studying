import random
def play_game():
    choices = ['pedra', 'papel', 'tesoura']
    computer_choice = random.choice(choices)
    user_choice = input("Escolha pedra, papel ou tesoura: ")

    if user_choice not in choices:
        print("Escolha inválida. Tente novamente.")
        return

    print("Você escolheu:", user_choice)
    print("O computador escolheu:", computer_choice)

    if user_choice == computer_choice:
        print("Empate!")
    elif (user_choice == 'pedra' and computer_choice == 'tesoura') or \
         (user_choice == 'papel' and computer_choice == 'pedra') or \
         (user_choice == 'tesoura' and computer_choice == 'papel'):
        print("Você venceu!")
    else:
        print("Você perdeu!")

play_game()
