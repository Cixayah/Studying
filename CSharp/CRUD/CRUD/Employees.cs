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
                // Confirma se o usuário deseja editar
                DialogResult result = MessageBox.Show("Deseja salvar as alterações?", "Confirmar Edição", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
                if (result == DialogResult.Yes)
                {
                    // Atribui os novos valores das TextBoxes para o objeto querys
                    AssignTextBoxValuesToQuerys();
                    querys.Id = int.Parse(lblId.Text); // Pega o ID atual

                    bool editSuccessful = querys.EditEmployee();
                    if (editSuccessful)
                    {
                        MessageBox.Show("Registro atualizado com sucesso!", "Sucesso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                        EnableTextBoxes(false);
                        ClearAllFields();
                    }
                    else
                    {
                        MessageBox.Show("Erro ao atualizar o registro. Verifique os dados e tente novamente.", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                }
            }
            else
            {
                MessageBox.Show("Nenhum registro selecionado para edição.", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }



        private void btnDelete_Click(object sender, EventArgs e)
        {
            if (!string.IsNullOrEmpty(lblId.Text))
            {
                // Confirma se o usuário deseja deletar o registro
                DialogResult result = MessageBox.Show("Tem certeza que deseja excluir este registro?", "Confirmar Exclusão", MessageBoxButtons.YesNo, MessageBoxIcon.Warning);
                if (result == DialogResult.Yes)
                {
                    querys.Id = int.Parse(lblId.Text); // Pega o ID atual

                    bool deleteSuccessful = querys.DeleteEmployee();
                    if (deleteSuccessful)
                    {
                        MessageBox.Show("Registro excluído com sucesso!", "Sucesso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                        ClearAllFields();
                    }
                    else
                    {
                        MessageBox.Show("Erro ao excluir o registro. Tente novamente.", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                }
            }
            else
            {
                MessageBox.Show("Nenhum registro selecionado para exclusão.", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
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
