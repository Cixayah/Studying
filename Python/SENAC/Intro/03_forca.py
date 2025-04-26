import forca.desenhos as desenhos
import forca.func as func
def gg():
    func.print_opening_msg()
    tip = func.set_theme()
    secret_word = func.load_secret_word(tip)
    correctly_letters = func.init_corrects_letters(secret_word)
    print(f'Dica: {tip.upper()}')
    print(f'Palavra secreta contém: {len(correctly_letters)} letras')
    print(correctly_letters)
    dead = False
    got_it = False
    wrong_trys = []
    errors = 0
    while(not dead and not got_it):
        try_chance = input('Qual é a letra? ')
        try_chance = try_chance.strip().upper()
        if(try_chance in secret_word):
            index = 0
            for letter in secret_word:
                if(try_chance == letter):
                    correctly_letters[index] = letter    
                index += 1
        else:
            errors += 1
            desenhos.forca(errors)
            wrong_trys.append(try_chance)
        dead = errors == 7
        correctly = '_' not in correctly_letters
        print(f'Dica: {tip.upper()}')
        print(f'Erros: {correctly_letters}')
        print(correctly_letters)
        
        if(correctly):
            desenhos.vencedor()
        else:
            desenhos.perdedor(secret_word)
            
        print('\nObrigado por participar!\n')
        
if(__name__ == "__main__"):
    gg()