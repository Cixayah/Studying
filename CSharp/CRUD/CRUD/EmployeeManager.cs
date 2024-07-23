using DatabaseManager;
using MySql.Data.MySqlClient;

namespace CRUD
{
    internal class EmployeeManager
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Number { get; set; }
        public string Neighborhood { get; set; }
        public string Rg { get; set; }
        public string Cpf { get; set; }

        public EmployeeManager()
        {
            Id = 0;
            Name = string.Empty;
            Phone = string.Empty;
            Email = string.Empty;
            Address = string.Empty;
            Number = string.Empty;
            Neighborhood = string.Empty;
            Rg = string.Empty;
            Cpf = string.Empty;
        }
        private bool ExecuteNonQuery(string query)
        {
            try
            {
                using (MySqlConnection conn = GetMySqlConnection())
                {
                    conn.Open();
                    using (MySqlCommand sqlCommand = CreateMySqlCommand(query, conn))
                    {
                        sqlCommand.ExecuteNonQuery();
                    }

                }
                return true;
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Erro no banco de dados: {ex.Message}");
                return false;

            }
        }

        private MySqlConnection GetMySqlConnection()
        {
            return new MySqlConnection(DatabaseConnection.ConnectionString);
        }

        private MySqlCommand CreateMySqlCommand(string query, MySqlConnection conn)
        {
            MySqlCommand command = conn.CreateCommand();
            command.CommandText = query;
            return command;
        }

        public bool SaveEmployee()
        {
            string insertQuery = $"INSERT INTO employee (name, phone, email, address, number, neighborhood, rg, cpf)" +
                                 $" VALUES('{Name}','{Phone}','{Email}','{Address}','{Number}','{Neighborhood}','{Rg}','{Cpf}')";
            return ExecuteNonQuery(insertQuery);

        }

        public EmployeeManager SearchEmployee(string searchTerm)
        {
            EmployeeManager employee = new EmployeeManager();

            try
            {
                using MySqlConnection conn = GetMySqlConnection();
                conn.Open();

                string select = $"SELECT Id, name, phone, email, address, number, neighborhood, rg, cpf " +
                                $"FROM employee WHERE name or cpf = '{searchTerm}'" +
                                $" OR cpf = '{searchTerm}';";
                //WHERE campo necessário do click search

                using MySqlCommand sqlCommand = CreateMySqlCommand(select, conn);
                sqlCommand.CommandText = select;
                MySqlDataReader reader = sqlCommand.ExecuteReader();

                if (reader != null && reader.HasRows)
                {
                    while (reader.Read())
                    {
                        employee.Id = int.Parse(reader["Id"].ToString());
                        employee.Name = reader["Name"].ToString();
                        employee.Phone = reader["Phone"].ToString();
                        employee.Email = reader["Email"].ToString();
                        employee.Address = reader["Address"].ToString();
                        employee.Number = reader["Number"].ToString();
                        employee.Neighborhood = reader["Neighborhood"].ToString();
                        employee.Rg = reader["Rg"].ToString();
                        employee.Cpf = reader["Cpf"].ToString();
                    }
                    MessageBox.Show("Funcionário encontrado!", "Sucesso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    return employee;
                }
                else
                {
                    MessageBox.Show("Funcionário não encontrado", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    return null;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Erro na busca do funcionário: {ex.Message}", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return null;
            }
        }

        public bool EditEmployee()
        {
            string updateQuery = $"UPDATE employee SET" +
                $" name = '{Name}', phone = '{Phone}', email = '{Email}'," +
                $"address = '{Address}', number = '{Number}', neighborhood = '{Neighborhood}', rg = '{Rg}', cpf = '{Cpf}' WHERE id = {Id}";
            return ExecuteNonQuery(updateQuery);
        }

        public bool DeleteEmployee()
        {
            string deleteQuery = $"DELETE FROM employee WHERE id = {Id}";
            return ExecuteNonQuery(deleteQuery);
        }
    }
}

//private void ValidateEmployeeData()
//{
//    // Implemente a validação dos dados aqui
//}

