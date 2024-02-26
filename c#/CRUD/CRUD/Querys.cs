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

        private void ShowDatabaseErrorMessageBox(Exception ex)
        {
            MessageBox.Show($"Erro no banco de dados: {ex.Message}");
        }

        public bool SaveEmployee()
        {
            try
            {
                ValidateEmployeeData(); // Adicione validação dos dados aqui

                using (MySqlConnection conn = GetMySqlConnection())
                {
                    conn.Open();
                    string insertQuery = "INSERT INTO Employee (name, phone, email, address, number, neighborhood, rg, cpf) " +
                                         "VALUES (@Name, @Phone, @Email, @Address, @Number, @Neighborhood, @Rg, @Cpf)";

                    using (MySqlCommand sqlCommand = CreateMySqlCommand(insertQuery, conn))
                    {
                        sqlCommand.Parameters.AddWithValue("@Name", Name);
                        sqlCommand.Parameters.AddWithValue("@Phone", Phone);
                        sqlCommand.Parameters.AddWithValue("@Email", Email);
                        sqlCommand.Parameters.AddWithValue("@Address", Address);
                        sqlCommand.Parameters.AddWithValue("@Number", Number);
                        sqlCommand.Parameters.AddWithValue("@Neighborhood", Neighborhood);
                        sqlCommand.Parameters.AddWithValue("@Rg", Rg);
                        sqlCommand.Parameters.AddWithValue("@Cpf", Cpf);

                        sqlCommand.ExecuteNonQuery();
                    }
                }
                return true;
            }
            catch (MySqlException ex)
            {
                ShowDatabaseErrorMessageBox(ex);
                return false;
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Erro desconhecido: {ex.Message}");
                return false;
            }
        }

        private void ValidateEmployeeData()
        {
            // Implemente a validação dos dados aqui
        }

    }
}
