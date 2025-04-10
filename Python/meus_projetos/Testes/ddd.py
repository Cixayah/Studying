import re

def validar_telefone(telefone):
    # Remove todos os espaços, parênteses e hífens
    telefone_limpo = re.sub(r'[\s\(\)\-]', '', telefone)
    
    # Expressão regular para validar telefone brasileiro
    padrao = r'^\+55\d{10,11}$'
    
    if re.match(padrao, telefone_limpo):
        return True
    else:
        return False

telefone = input("Digite seu telefone com o código do país (+55): ")

if validar_telefone(telefone):
    print("Telefone válido! 📱")
else:
    print("Telefone inválido! 🚫")
