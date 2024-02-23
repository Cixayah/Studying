using DatabaseManager;
using MySql.Data.MySqlClient;
using System;
using System.Diagnostics;
using System.Windows.Forms;

namespace CRUD
{
    public partial class Employees : Form
    {
        MySqlConnection conn;
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

            bool saveSuccessful = querys.SaveEmployee();
            if (saveSuccessful)
            {
                MessageBox.Show("Registro salvo com sucesso!", "Sucesso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                EnableTextBoxes(false);
                ClearAllFields();
            }
            else
            {
                MessageBox.Show("Erro ao salvar o registro. Verifique os dados e tente novamente.", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void Employees_FormClosed(object sender, FormClosedEventArgs e)
        {
            conn.Close();
        }

        // Functions
        private void EnableTextBoxes(bool p_state)
        {
            foreach (Control ctrl in Controls)
            {
                if (ctrl is TextBoxBase textBoxBase)
                {
                    textBoxBase.Enabled = p_state;
                    if (p_state)
                        textBoxBase.Focus();
                }
            }
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

        private void ClearAllFields()
        {
            foreach (Control ctrl in Controls)
            {
                if (ctrl is TextBoxBase textBoxBase)
                {
                    textBoxBase.Clear();
                }
            }
        }
    }
}
