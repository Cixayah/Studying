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
        private const string server = "aws.connect.psdb.cloud";
        private const string database = "cixayah";
        private const string port = "3306";
        private const string user = "07j35858xmsrg4ozuw5g";
        private const string password = "pscale_pw_hPBdKVUtdY7hmpPuOnIneqlo29mf2cE2xEnHRUuRVto";

        // Database connection string
        public static string ConnectionString = $"server={server}; user={user}; database={database}; port={port}; password={password}";
    }
}