using DatabaseManager;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD
{
    internal class Querys
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Phone { get; set; }
        public string? Email { get; set; }
        public string? Address { get; set; }
        public string? Number { get; set; }
        public string? Neighborhood { get; set; }
        public string? Rg { get; set; }
        public string? Cpf { get; set; }


        private MySqlConnection GetMySqlConnection()
        {
            return new MySqlConnection(DatabaseConnection.ConnectionString);
        }

        private MySqlCommand CreateMySqlCommand(string query, MySqlConnection connection)
        {
            MySqlCommand command = connection.CreateCommand();
            command.CommandText = query;
            return command;
        }

        private bool ExecuteNonQuery(string query)
        {
            try
            {
                using (MySqlConnection connection = GetMySqlConnection())
                {
                    connection.Open();
                    using (MySqlCommand sqlCommand = CreateMySqlCommand(query, connection))
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
        public bool SaveEmployee()
        {
            string insertQuery = $"INSERT INTO Employee (name, phone, email, address, number, neighborhood, rg, cpf ) VALUES('{Name}','{Phone}','{Email}','{Address}','{Number}','{Neighborhood},'{Rg}','{Cpf}')";
            return ExecuteNonQuery(insertQuery);
        }
    }
}
