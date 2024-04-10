using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseManager
{
    static class DatabaseConnection
    {
        // Database credentials
        private const string server = "";
        private const string database = "";
        private const string port = "";
        private const string user = "";
        private const string password = "";
        
        // Database connection string
        public static string ConnectionString = $"server={server}; user={user}; database={database}; port={port}; password={password}";
    }
}

