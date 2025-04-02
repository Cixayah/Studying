def analisar_texto(texto):
    texto = texto.lower()
    temporaria = '' 
    palavras = []
    freq_palavras = {}
    freq_letras = {}
    for i in texto:
        if i != ' ':
            temporaria += i
        else:
            palavras.append(temporaria)
            temporaria = ''
    if temporaria:
        palavras.append(temporaria)
    for palavra in palavras:
        freq_palavras[palavra] += 1
        for letra in palavra:
            freq_letras[letra] += 1
    qtd_palavras = len(freq_palavras)
    print(f"Contagem de palavras: {qtd_palavras}")
    print(f"Frequência de palavras: {freq_palavras}")
    print(f"Frequência de letras: {freq_letras}")

analisar_texto('Olá mundo! Este é um teste. Olá novamente.')