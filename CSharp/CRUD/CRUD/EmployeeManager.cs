using DatabaseManager;
using MySql.Data.MySqlClient;
using Org.BouncyCastle.Asn1.Ocsp;
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
            string insertQuery = $"INSERT INTO railway.employee (name, phone, email, address, number, neighborhood, rg, cpf)" +
                                 $" VALUES('{Name}','{Phone}','{Email}','{Address}','{Number}','{Neighborhood}','{Rg}','{Cpf}')";
            return ExecuteNonQuery(insertQuery);

        }

        public MySqlDataReader SearchEmployee(string searchTerm)
        {
            try
            {
                using MySqlConnection conn = GetMySqlConnection();
                conn.Open();

                string select = $"SELECT name, phone, email, address, number, neighborhood, rg, cpf " +
                                $"FROM railway.employee WHERE cpf = '{searchTerm}';";

                using MySqlCommand sqlCommand = CreateMySqlCommand(select, conn);
                sqlCommand.CommandText = select;
                MySqlDataReader reader = sqlCommand.ExecuteReader();

                if (reader.HasRows)
                {
                    MessageBox.Show("Funcionário encontrado!", "Sucesso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
                else
                {
                    MessageBox.Show("Funcionário não encontrado", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }

                return reader;
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Erro na busca do funcionário: {ex.Message}", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return null;
            }
        }
    }
}

//private void ValidateEmployeeData()
//{
//    // Implemente a validação dos dados aqui
//}

