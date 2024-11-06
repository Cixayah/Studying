import os
from module import sum

def clean():
    os.system('cls' if os.name == 'nt' else 'clear')

clean()
print(sum(96, 21))
