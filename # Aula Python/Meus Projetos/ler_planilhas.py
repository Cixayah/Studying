import pandas as pd

path = r'C:\Users\Gabriel\OneDrive\Estudos\# Aula Python\Meus Projetos\excel.xlsx'

planilha_original = pd.read_excel(path)

planilha_em_branco = pd.DataFrame(index=range(planilha_original.shape[0]),
                                  columns=planilha_original.columns)

# Verifica se a célula de referência contém valor e se é um DataFrame
if not pd.isnull(planilha_original.iloc[0, 0]) and isinstance(planilha_original.iloc[0, 0], pd.Series):
    fonte_celula_ref = planilha_original.iloc[0, 0].style
else:
    # Se não, usa uma célula alternativa com formatação desejada
    fonte_celula_ref = planilha_original.iloc[1, 2].style  # Ajustar índice se necessário

# Aplica o estilo a todas as células em branco
planilha_em_branco = planilha_em_branco.applymap(lambda x: fonte_celula_ref)

planilha_em_branco.to_excel('planilha_em_branco.xlsx')
