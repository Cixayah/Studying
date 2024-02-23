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
        private const string server = "104.197.15.86";
        private const string database = "pantheon";
        private const string port = "17403";
        private const string user = "pantheon";
        private const string password = "GlZP4vBczOTEsC8eovnLrqwrZXK4d9yl";

        // Database connection string
        public static string ConnectionString = $"server={server}; user={user}; database={database}; port={port}; password={password}";
    }
}

