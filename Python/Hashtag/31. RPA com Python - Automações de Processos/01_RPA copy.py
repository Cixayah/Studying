import pyautogui
import time
import os
pyautogui.alert("O código vai começar. Não use nada do seu computador enquanto o código está rodando")
pyautogui.PAUSE = 0.5
# abrir o google drive no meu computador 320x137
os.system("start brave")

time.sleep(1)
pyautogui.write("https://drive.google.com/drive/my-drive")
pyautogui.press('enter')

# entrar na minha área de trabalho
pyautogui.hotkey('winleft', 'd')
# cliquei no arquivo que eu quero fazer backup e arrastei ele
pyautogui.moveTo(3704, 98)
pyautogui.mouseDown()
pyautogui.moveTo(2318, 1413)

# enquanto eu to arrastando, eu vou mudar para o google drive
pyautogui.hotkey('alt', 'tab')
time.sleep(1)
# larguei o arquivo no google drive
pyautogui.mouseUp()

# esperar 5 segundos
time.sleep(5)

pyautogui.alert("O código acabou de rodar. Pode usar o seu computador de novo")