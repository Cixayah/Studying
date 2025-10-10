# os.listdir para navegar em caminhos
# /Users/Gabotavio/Desktop/EXEMPLO
# C:\Users\Gabotavio\Desktop\EXEMPLO
# caminho = r'C:\\Users\\Gabotavio\\Desktop\\EXEMPLO'
import os

caminho = os.path.join('/Users', 'Gabotavio', 'Desktop', 'EXEMPLO')

for pasta in os.listdir(caminho):
    caminho_completo_pasta = os.path.join(caminho, pasta)
    print(pasta)

    if not os.path.isdir(caminho_completo_pasta):
        continue

    for imagem in os.listdir(caminho_completo_pasta):
        print('  ', imagem)
