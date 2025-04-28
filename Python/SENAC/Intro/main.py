import subprocess
import os

def clear_screen():
    if os.name == 'nt':
        os.system('cls')
    else:
        os.system('clear')

def escolher_jogo():
    print("Escolha um jogo:")
    print("1 - Adivinhe o Número")
    print("2 - Pedra, Papel ou Tesoura")
    print("3 - Forca")

    user_choice = input("Digite o número do jogo: ")

    clear_screen()

    if user_choice == "1":
        subprocess.run(["python", "01_adivinhe_numero.py"])
    elif user_choice == "2":
        subprocess.run(["python", "02_PedraPapelTesoura.py"])
    elif user_choice == "3":
        subprocess.run(["python", "03_forca.py"])
    else:
        print("Escolha inválida.")

if __name__ == "__main__":
    escolher_jogo()
