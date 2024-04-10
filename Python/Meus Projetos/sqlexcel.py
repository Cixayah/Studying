import pandas as pd
from sqlalchemy import create_engine
import tkinter as tk
from tkinter import ttk, filedialog, messagebox
from tkcalendar import DateEntry
from datetime import datetime

def exportar_excel(data_inicio, data_fim, caminho_salvar):
    # String de conexão com o banco
    engine = create_engine("mysql+pymysql://root:@127.0.0.1:3306/sakila")

    # Construir a consulta SQL com base nas datas selecionadas
    query = f"SELECT * FROM payment WHERE payment_date BETWEEN '{data_inicio}' AND '{data_fim}'"

    # Ler os dados da tabela 'payment' usando a consulta personalizada
    df = pd.read_sql(query, engine)

    # Remover coluna 'id' (se necessário)
    # df = df.drop(columns=['id'])

    # Gerar o nome do arquivo com o formato desejado
    formato_data = '%d-%m-%Y'
    data_inicio_formatada = datetime.strptime(data_inicio, '%Y-%m-%d').strftime(formato_data)
    data_fim_formatada = datetime.strptime(data_fim, '%Y-%m-%d').strftime(formato_data)

    nome_arquivo = f'relatorio_{data_inicio_formatada}-{data_fim_formatada}.xlsx'

    # Unir o caminho de salvamento com o nome do arquivo
    caminho_completo = caminho_salvar + '/' + nome_arquivo

    # Exportar Excel
    df.to_excel(caminho_completo, index=False)

    messagebox.showinfo("Exportação Concluída", f'Dados exportados com sucesso para "{caminho_completo}"')

# Função para obter dados ao clicar no botão "Exportar para Excel"
def obter_dados():
    # Obter as datas selecionadas
    data_inicio = cal_inicio.get_date().strftime('%Y-%m-%d')
    data_fim = cal_fim.get_date().strftime('%Y-%m-%d')

    # Verificar se as datas são válidas
    if data_inicio > data_fim:
        messagebox.showerror("Erro", "A data de início não pode ser posterior à data de fim.")
        return

    # Pedir ao usuário para escolher o local de salvamento
    caminho_salvar = filedialog.askdirectory()

    # Verificar se o usuário cancelou a seleção do diretório
    if not caminho_salvar:
        return

    # Chamar a função para exportar dados
    exportar_excel(data_inicio, data_fim, caminho_salvar)

# Criar a interface gráfica
root = tk.Tk()
root.title("Exportar Dados para Excel")

# Adicionar widgets de calendário
cal_inicio_label = tk.Label(root, text="Data de Início:")
cal_inicio_label.pack(pady=5)
cal_inicio = DateEntry(root, width=12, background='darkblue', foreground='white', date_pattern='dd-mm-yyyy')
cal_inicio.pack(pady=5)

cal_fim_label = tk.Label(root, text="Data de Fim:")
cal_fim_label.pack(pady=5)
cal_fim = DateEntry(root, width=12, background='green', foreground='red', date_pattern='dd-mm-yyyy')
cal_fim.pack(pady=5)

# Adicionar botão para exportar dados
btn_exportar = tk.Button(root, text="Exportar para Excel", command=obter_dados)
btn_exportar.pack(pady=20)

# Iniciar o loop principal da interface gráfica
root.mainloop()
