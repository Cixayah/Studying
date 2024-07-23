import pygame
import time

# Inicializa o mixer do pygame
pygame.mixer.init()

# Carrega o arquivo de música
pygame.mixer.music.load("./Exercícios/assets/ex021- bedtime - baptiste proud.mp3")

# Reproduz a música
pygame.mixer.music.play()

# Aguarda até que a música termine
while pygame.mixer.music.get_busy():
    time.sleep(1)

print("A reprodução da música terminou.")
