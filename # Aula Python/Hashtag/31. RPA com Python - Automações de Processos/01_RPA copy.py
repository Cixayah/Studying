import pyautogui
import time
import mouse

# Configurar pausa entre comandos
pyautogui.PAUSE = 1

# Abrir o sistema (navegador Brave)
pyautogui.press('win')  # Pressionar a tecla Win
pyautogui.write('brave')  # Digitar 'brave'
pyautogui.press('enter')  # Pressionar Enter

# Acessar o Gmail

pyautogui.write('https://mail.google.com/mail/u/1/#inbox')
pyautogui.press('enter')

# Aguardar até que o logo do Gmail seja localizado na tela
# while not pyautogui.locateOnScreen('gmailLogo.png'):
#     time.sleep(1)
time.sleep(3)
# Localizar a imagem do arquivo PDF na tela



