import pandas as pd
from sqlalchemy import create_engine

# Crie uma conexão com o banco de dados
engine = create_engine(f"mysql+pymysql://root:@127.0.0.1:3306/sakila")

# Leia os dados da tabela 'employee'
df = pd.read_sql('SELECT * FROM payment', engine)

# Remova a coluna 'id'
df = df.drop(columns=['id'])

# Exporte os dados para um arquivo Excel
df.to_excel('employee_data.xlsx', index=False, sheet_name='Employee Data')

print("Dados exportados com sucesso para 'employee_data.xlsx'")
