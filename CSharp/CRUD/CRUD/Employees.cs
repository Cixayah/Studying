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
                string searchTerm = txtSearch.Text.Trim();
                if (!string.IsNullOrEmpty(searchTerm))
                {
                    var reader = querys.SearchEmployee(searchTerm);

                    if (reader != null /*&& reader.HasRows*/)
                    {
                        //reader.Read();
                        DisplayEmployeeData(reader);
                    }

                    //reader?.Close();
                }
                else
                {
                    MessageBox.Show("Preencha o campo de busca", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    ClearAllFields();
                    txtSearch.Focus();
                    lblId.Text = "";
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Erro ao localizar o registro: {ex.Message}", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }


        private void btnEdit_Click(object sender, EventArgs e)
        {
            if (!string.IsNullOrEmpty(lblId.Text))
            {
                EnableTextBoxes(true); // Habilita as caixas de texto para edição
                                       // Você pode adicionar qualquer lógica adicional aqui, se necessário
            }
            else
            {
                MessageBox.Show("Nenhum registro selecionado para edição.", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {

        }



        //functions
        private void DisplayEmployeeData(EmployeeManager reader)
        {
            lblId.Text = reader.Id.ToString();
            txtName.Text = reader.Name.ToString();
            txtMaskPhone.Text = reader.Phone.ToString();
            txtEmail.Text = reader.Email.ToString();
            txtAddress.Text = reader.Address.ToString();
            txtNumber.Text = reader.Number.ToString();
            txtNeighborhood.Text = reader.Neighborhood.ToString();
            txtMaskRg.Text = reader.Rg.ToString();
            txtMaskCpf.Text = reader.Cpf.ToString();
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
