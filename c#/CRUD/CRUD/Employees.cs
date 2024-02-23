using DatabaseManager;
using MySql.Data.MySqlClient;
using System;
using System.Diagnostics;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.ListView;

namespace CRUD
{

    public partial class Employees : Form
    {
        MySqlConnection conn = null;
        Querys querys = new Querys();

        public Employees()
        {
            InitializeComponent();

            conn = new MySqlConnection(DatabaseConnection.ConnectionString);
            conn.Open();

            EnableTextBoxes(false);
        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            EnableTextBoxes(true);
        }
        private void btnSave_Click(object sender, EventArgs e)
        {
            AssignTextBoxValuesToQuerys();

            bool SaveSuccessful = querys.SaveEmployee();
            if (SaveSuccessful)
            {

                MessageBox.Show("Registro salvo com sucesso!");
                EnableTextBoxes(false);

            }
        }
        private void Employees_FormClosed(object sender, FormClosedEventArgs e)
        {
            conn.Close();
        }

        //Functions

        private void EnableTextBoxes(bool p_state)
        {
            txtName.Enabled = p_state;
            txtMaskPhone.Enabled = p_state;
            txtEmail.Enabled = p_state;
            txtAddress.Enabled = p_state;
            txtNumber.Enabled = p_state;
            txtNeighborhood.Enabled = p_state;
            txtMaskRg.Enabled = p_state;
            txtMaskCpf.Enabled = p_state;
            if (p_state)
                txtName.Focus();
        }
        private void AssignTextBoxValuesToQuerys()
        {
            querys.Name = txtName.Text;
            querys.Phone = txtMaskPhone.Text;
            querys.Email = txtEmail.Text;
            querys.Address = txtAddress.Text;
            querys.Number = txtNumber.Text;
            querys.Neighborhood = txtNeighborhood.Text;
            querys.Rg = txtMaskRg.Text;
            querys.Cpf = txtMaskCpf.Text;
        }

    }
}