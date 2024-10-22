from rembg import remove
from PIL import Image

input_path = './img/entrada.png'
output_path = './img/saida.png'

input_image = Image.open(input_path)  # Renomeado para evitar conflito
output_image = remove(input_image)  # Remoção do fundo
output_image.save(output_path)  # Salvando a imagem processada
