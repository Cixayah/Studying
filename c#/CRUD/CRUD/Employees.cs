using MySql.Data.MySqlClient;
using System;
using System.Windows.Forms;

namespace CRUD
{
    public partial class Employees : Form
    {
        EmployeeManager querys = new EmployeeManager();

        public Employees()
        {
            InitializeComponent();
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

        private void btnSearch_Click(object sender, EventArgs e)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(txtSearch.Text))
                {
                    querys.Cpf = txtSearch.Text; // Assumindo que o campo de pesquisa é para o CPF, ajuste conforme necessário.
                    MySqlDataReader reader = querys.SearchEmployee();

                    if (reader != null && reader.HasRows)
                    {
                        reader.Read();
                        txtName.Text = reader["Name"].ToString();
                        txtMaskPhone.Text = reader["Phone"].ToString();
                        txtEmail.Text = reader["Email"].ToString();
                        txtAddress.Text = reader["Address"].ToString();
                        txtNumber.Text = reader["Number"].ToString();
                        txtNeighborhood.Text = reader["Neighborhood"].ToString();
                        txtMaskRg.Text = reader["Rg"].ToString();
                        txtMaskCpf.Text = reader["Cpf"].ToString();
                    }
                    else
                    {
                        MessageBox.Show("Registro não encontrado.", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                        ClearAllFields();
                        txtSearch.Focus();
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Erro ao buscar o registro: {ex.Message}", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }


        private void EnableTextBoxes(bool p_state)
        {
            foreach (Control ctrl in Controls)
            {
                if (ctrl is TextBoxBase textBoxBase)
                {
                    textBoxBase.Enabled = (textBoxBase == txtSearch) ? true : p_state;
                    if ((textBoxBase == txtSearch) && p_state)
                        textBoxBase.Focus();
                }
            }
        }

        private bool AreFieldsFilled()
        {
            return !string.IsNullOrWhiteSpace(txtName.Text) &&
                   !string.IsNullOrWhiteSpace(txtEmail.Text) &&
                   !string.IsNullOrWhiteSpace(txtMaskCpf.Text) &&
                   !string.IsNullOrWhiteSpace(txtAddress.Text);
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
