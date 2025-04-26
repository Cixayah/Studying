import random
from os import path
def print_opening_msg():
    print('*****************************')
    print('------- JOGO DA FORCA -------')
    print('*****************************')
    
def set_theme():
    tip = int(input("""
                    Digite a opção para o tema:
                    1 - Carros
                    2 - Cidades do Brasil 
                    3 - Países
                    4 - Nome de pessoas
                    5 - Frutas """))
    
    tips = ('carros' ,'cidade' ,'país' ,'nome' ,'fruta')
    return tips[tip-1]
def load_secret_word(theme):
    dir_name = path.dirname(path.abspath(__file__))
    archive = open(f'{dir_name}\\{theme}.txt','r')
    words = []
    for line in archive:
        line = line.strip()
        words.append(line)
    archive.close
    number = random.randrange(0, len(words)+1)
    secret_word = words[number].upper()
    return secret_word
def init_corrects_letters(secret_word):
    return ['_' for letter in secret_word]