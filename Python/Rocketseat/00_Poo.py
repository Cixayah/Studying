# Poo
# Classe de exemplo
class People: 
    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age
    
    def hello(self):
        return f"Hello, my name is {self.name} and I have {self.age} years old."

# Objetos
people_one = People("Larissa", 23)
hello_one = people_one.hello()
print(hello_one)

people_two = People("Gabriel", 26)
hello_two = people_two.hello()
print(hello_two)
