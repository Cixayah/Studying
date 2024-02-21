# Exemplo de herança
# \n significa quebra de linha
print("\nExemplo de herança:")

class Animal:
    def __init__(self, name) -> None:
        self.name = name

    def walk(self):
        print(f"The animal {self.name} walked.")
        return

    def animal_sound(self):
        pass

class Dog(Animal):
    def animal_sound(self):
        return "Au, au"

class Cat(Animal):
    def animal_sound(self):
        return "Miau!"

dog = Dog("Nick")  # Poderia colocar nome="Nick" mas assim é melhor (poupa código).
cat = Cat("Larissinha")

print("\nExemplo de polimorfismo")
animals = [dog, cat]

for animal in animals:
    print(f"{animal.name} faz: {animal.animal_sound()}")

print("\nExemplo de encapsulamento")

class BankAccount:
    def __init__(self, balance) -> None:
        self.__balance = balance  # Atributo privado __balance

    def deposit(self, value):
        if value > 0:
            self.__balance += value

    def withdraw(self, value):
        if value > 0 and value <= self.__balance:
            self.__balance -= value

    def check_balance(self):
        return self.__balance

bank_account = BankAccount(balance=1000)
print(f"Saldo da conta bancária: {bank_account.check_balance()}")
bank_account.deposit(value=500) 
print(f"Saldo da conta bancária: {bank_account.check_balance()}")
bank_account.deposit(value=-500) 
print(f"Saldo da conta bancária: {bank_account.check_balance()}")
bank_account.withdraw(value=200) 
print(f"Saldo da conta bancária: {bank_account.check_balance()}")

friend_account = BankAccount(balance=50)
print("\nExemplo de abstração:")
from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod #decorador
    def turn_on(self):
        pass
    
    @abstractmethod #decorador
    def turn_off(self):
        pass
    
class Car(Vehicle):
    def __init__(self) -> None:
        pass
    
    def turn_on(self):
        return "Carro ligado usando a chave"
    def turn_off(self):
        return "Carro desligado usando a chave"
    
yellow_car = Car()
print(yellow_car.turn_on())
print(yellow_car.turn_off())