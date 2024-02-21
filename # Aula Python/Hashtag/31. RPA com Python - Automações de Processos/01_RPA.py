import pyautogui
import keyboard
import mouse
import time

#time.sleep(1)
#yautogui.write() -> Escreve
#pyautogui.click -> Clicka
#pyautogui.locateOnScreen -> Identifica uma imagem na sua tela
#pyautogui.hotkey -> usa atalhos do teclado
#pyautogui.press -> aperta um botão do teclado
#abrir o sistema (abrir o navegador, neste caso Brave)
#entrar no Gmail
# while True:
#     print(mouse.get_position())
#     time.sleep(1)
# Imagem no meio
# x, y, largura, altura = pyautogui.locateOnScreen('busca_google.png')
# pyautogui.click(x + largura/2, y + altura/2)
pyautogui.PAUSE = 1 #tempo de espera a cada comando
pyautogui.press('win') #pressionar win
pyautogui.write('brave') #digitar brave
pyautogui.press('enter') #pressionar enter
pyautogui.write('https://mail.google.com/mail/u/1/#inbox')
pyautogui.press('enter')

while not pyautogui.locateOnScreen('gmailLogo.png'):
    time.sleep(10)