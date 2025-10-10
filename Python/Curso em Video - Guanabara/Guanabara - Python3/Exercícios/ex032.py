# Ano bissexto
ask_year = int(input('Digite o ano: '))
if (ask_year % 4==0 and ask_year % 100!=0) or (ask_year % 400==0):
    print(f'O ano de {ask_year} é BISSEXTO.')
else: 
    print(f'O ano de {ask_year} é NÃO É BISSEXTO.')