﻿using MySql.Data.MySqlClient;
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
                if (!string.IsNullOrEmpty(txtMaskCpf.Text))
                {
                    querys.Cpf = new string(txtMaskCpf.Text.Where(char.IsDigit).ToArray());

                    MySqlDataReader reader = querys.SearchEmployee();

                    if (reader != null && reader.HasRows)
                    {
                        reader.Read();

                        DisplayEmployeeData(reader);
                    }
                    else
                    {
                        MessageBox.Show("Funcionário não encontrado", "Aviso", MessageBoxButtons.OK, MessageBoxIcon.Information);
                        ClearAllFields();
                        txtSearch.Focus();
                        lblId.Text = "";
                    }

                    reader?.Close();
                }
                else
                {
                    MessageBox.Show("Preencha o CPF", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
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

        //functions

        private void DisplayEmployeeData(MySqlDataReader reader)
        {
            lblId.Text = reader["id"].ToString();
            txtName.Text = reader["name"].ToString();
            txtMaskPhone.Text = reader["phone"].ToString();
            txtEmail.Text = reader["email"].ToString();
            txtAddress.Text = reader["address"].ToString();
            txtNumber.Text = reader["number"].ToString();
            txtNeighborhood.Text = reader["neighborhood"].ToString();
            txtMaskRg.Text = reader["rg"].ToString();
            txtMaskCpf.Text = reader["cpf"].ToString();
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

        private void txtSearch_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
