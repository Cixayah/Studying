import pyautogui
import time

# Configurar pausa entre comandos
pyautogui.PAUSE = 1

# Abrir o sistema (navegador Brave)
pyautogui.press('win')  # Pressionar a tecla Win
pyautogui.write('brave')  # Digitar 'brave'
pyautogui.press('enter')  # Pressionar Enter

# Acessar o Gmail

pyautogui.write('gmail google')
pyautogui.press('enter')
x, y, l, a = pyautogui.locateOnScreen('./busca_google.png')
pyautogui.click(x+l/2, y+a/2)