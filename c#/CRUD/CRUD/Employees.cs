using MySql.Data.MySqlClient;
using System;
using System.Diagnostics;
using System.Windows.Forms;

namespace CRUD
{

    public partial class Employees : Form
    {
        private Querys SaveQuery;

        public Employees()
        {
            InitializeComponent();
            SaveQuery = new Querys();
        }

        private void ShowMessageBox(string message)
        {
            MessageBox.Show(message);
        }
        private bool AreFieldsFilled()
        {
            return !string.IsNullOrWhiteSpace(txtName.Text) &&
                   !string.IsNullOrWhiteSpace(txtEmail.Text) &&
                   !string.IsNullOrWhiteSpace(txtMaskCpf.Text) &&
                   !string.IsNullOrWhiteSpace(txtAddress.Text);
        }

        //Botões ficam aqui!
        private void btnSave_Click(object sender, EventArgs e)
        {
            try
            {
                if (AreFieldsFilled())
                {
                    SaveQuery.Name = txtName.Text;
                    SaveQuery.Phone = txtMaskPhone.Text;
                    SaveQuery.Email = txtEmail.Text;
                    SaveQuery.Address = txtAddress.Text;
                    SaveQuery.Number = txtNumber.Text;
                    SaveQuery.Neighborhood = txtNeighborhood.Text;
                    SaveQuery.Rg = txtMaskRg.Text;
                    SaveQuery.Cpf = txtMaskCpf.Text;

                    if (SaveQuery.Querys())
                    {
                        ShowMessageBox($"O funcionário {SaveQuery.Name} foi cadastrado com sucesso!");
                    }
                    else
                    {
                        ShowMessageBox("Não foi possível cadastrar funcionário!");
                    }
                }
                else
                {
                    ShowMessageBox("Preencha todos os campos!");
                }
            }
            catch (Exception ex)
            {
                ShowMessageBox("Erro ao cadastrar: " + ex.Message);
            }
        }
    }
}