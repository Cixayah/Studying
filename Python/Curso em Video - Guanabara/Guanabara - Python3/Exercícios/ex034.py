# Para salários superiores à 1250 aumente +10% para iguais ou superiores, aumente 15%

ask_money =  int(input('Qual seu salário? '))
if ask_money > 1250:
    ask_money = ask_money + (ask_money * 10 / 100)
else:
    ask_money = ask_money + (ask_money * 15 / 100)
    
print (f'Seu aumento foi de: {ask_money}')