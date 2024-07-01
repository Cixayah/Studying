import pandas as pd

path = r'C:\Users\Gabriel\OneDrive\Estudos\# Aula Python\Meus Projetos\excel.xlsx'

planilha_original = pd.read_excel(path)

print(planilha_original)