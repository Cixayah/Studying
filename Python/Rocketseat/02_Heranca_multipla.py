class Animal:
    def __init__(self, name) -> None:
        self.name = name
        
    def animal_sound(self):
        pass
    
class Carnivorous(Animal):
    def eat_meat(self):
        return f"{self.name} está se alimentando."
    
class Bird(Animal):
    def fly(self):
        return f"{self.name} está voando."
    
class Falcon(Carnivorous, Bird):
    def animal_sound(self):
        return "Uiiihhhh"
    
falcon_name = Falcon("Anivia")
# Acessando métodos da classe base 'Animal'Animal
print("Nome do Falcão:", falcon_name.name)
print("Som do Falcão:", falcon_name.animal_sound())

# Acessando método das classes 'Carnivorous' e 'Bird'
print("Falcão alimentando: ", falcon_name.eat_meat())
