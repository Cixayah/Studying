import random

opt = ["pedra", "papel", "tesoura"]
jokenpo = random.choice(opt)
user_win = f"Ganhou.. coloquei {jokenpo}. :("


def choices():
    print(jokenpo)
    user_choice = input("Pedra, papel ou tesoura?: ").lower()
    while user_choice not in opt:
        print("Escolhe certo!")
        user_choice = input("Pedra, papel ou tesoura?: ").lower()
    return user_choice


user_choice = choices()
if user_choice == jokenpo:
    print(f"Empatamos, também coloquei {jokenpo} kkkk")
elif (
    (user_choice == "pedra" and jokenpo == "tesoura")
    or (user_choice == "tesoura" and jokenpo == "papel")
    or (user_choice == "papel" and jokenpo == "pedra")
):
    print(user_win)
else:
    print(f"Como {jokenpo} ganha de {user_choice}, eu venci!")
