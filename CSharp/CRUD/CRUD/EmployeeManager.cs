using DatabaseManager;
using MySql.Data.MySqlClient;
using System;
using System.Windows.Forms;

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

        private bool ExecuteNonQuery(string query, params MySqlParameter[] parameters)
        {
            try
            {
                using (MySqlConnection conn = GetMySqlConnection())
                {
                    conn.Open();
                    using (MySqlCommand sqlCommand = CreateMySqlCommand(query, conn, parameters))
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

        private MySqlCommand CreateMySqlCommand(string query, MySqlConnection conn, params MySqlParameter[] parameters)
        {
            MySqlCommand command = conn.CreateCommand();
            command.CommandText = query;
            if (parameters != null)
            {
                command.Parameters.AddRange(parameters);
            }
            return command;
        }

        public bool SaveEmployee()
        {
            if (!ValidateEmployeeData())
                return false;

            string insertQuery = "INSERT INTO employee (name, phone, email, address, number, neighborhood, rg, cpf) " +
                                 "VALUES(@name, @phone, @Email, @address, @number, @neighborhood, @rg, @cpf)";
            MySqlParameter[] parameters = {
                new("@name", Name),
                new("@phone", Phone),
                new("@Email", Email),
                new("@address", Address),
                new("@number", Number),
                new("@neighborhood", Neighborhood),
                new("@rg", Rg),
                new("@cpf", Cpf)
            };
            return ExecuteNonQuery(insertQuery, parameters);
        }

        public EmployeeManager? SearchEmployee(string searchTerm)
        {
            EmployeeManager employee = new EmployeeManager();

            try
            {
                using MySqlConnection conn = GetMySqlConnection();
                conn.Open();

                string select = "SELECT Id, name, phone, email, address, number, neighborhood, rg, cpf " +
                                "FROM employee WHERE name = @searchTerm OR cpf = @searchTerm";
                MySqlCommand sqlCommand = CreateMySqlCommand(select, conn, new MySqlParameter("@searchTerm", searchTerm));
                using MySqlDataReader reader = sqlCommand.ExecuteReader();

                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        employee.Id = int.TryParse(reader["Id"].ToString(), out int id) ? id : 0; // verifica se o valor é nulo e atribui 0
                        employee.Name = reader["name"]?.ToString() ?? string.Empty; // se nulo, atribui string vazia
                        employee.Phone = reader["phone"]?.ToString() ?? string.Empty;
                        employee.Email = reader["email"]?.ToString() ?? string.Empty;
                        employee.Address = reader["address"]?.ToString() ?? string.Empty;
                        employee.Number = reader["number"]?.ToString() ?? string.Empty;
                        employee.Neighborhood = reader["neighborhood"]?.ToString() ?? string.Empty;
                        employee.Rg = reader["rg"]?.ToString() ?? string.Empty;
                        employee.Cpf = reader["cpf"]?.ToString() ?? string.Empty;
                    }
                    MessageBox.Show("Funcionário encontrado!", "Sucesso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    return employee;
                }
                else
                {
                    MessageBox.Show("Funcionário não encontrado", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    return null; // ou você pode retornar um novo objeto EmployeeManager se preferir
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Erro na busca do funcionário: {ex.Message}", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return null; // ou você pode retornar um novo objeto EmployeeManager se preferir
            }
        }

        public bool EditEmployee()
        {
            if (!ValidateEmployeeData())
                return false;

            string updateQuery = "UPDATE employee SET " +
                                 "name = @name, phone = @phone, email = @Email, " +
                                 "address = @address, number = @number, neighborhood = @neighborhood, " +
                                 "rg = @rg, cpf = @cpf WHERE id = @id";
            MySqlParameter[] parameters = {
                new("@name", Name),
                new("@phone", Phone),
                new("@Email", Email),
                new("@address", Address),
                new("@number", Number),
                new("@neighborhood", Neighborhood),
                new("@rg", Rg),
                new("@cpf", Cpf),
                new("@id", Id)
            };
            return ExecuteNonQuery(updateQuery, parameters);
        }

        public bool DeleteEmployee()
        {
            string deleteQuery = "DELETE FROM employee WHERE id = @id";
            MySqlParameter parameter = new MySqlParameter("@id", Id);
            return ExecuteNonQuery(deleteQuery, parameter);
        }

        private bool ValidateEmployeeData()
        {
            if (string.IsNullOrWhiteSpace(Name) || string.IsNullOrWhiteSpace(Cpf))
            {
                MessageBox.Show("Nome e CPF são obrigatórios!", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return false;
            }
            // Adicione mais validações conforme necessário.
            return true;
        }
    }
}
