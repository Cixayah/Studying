from fpdf import FPDF

# Corrige caracteres que não são compatíveis com o padrão latin-1 do FPDF
def limpar_caracteres(texto):
    substituicoes = {
        "–": "-",  # hífen longo
        "—": "-",  # outro tipo de hífen
        "“": '"',
        "”": '"',
        "‘": "'",
        "’": "'"
    }
    for velho, novo in substituicoes.items():
        texto = texto.replace(velho, novo)
    return texto

# Classe personalizada de PDF
class PDF(FPDF):
    def header(self):
        self.set_font("Arial", "B", 12)
        self.cell(0, 10, "Relatório Final - Projeto de Extensão", ln=True, align="C")
        self.ln(10)

    def chapter(self, title, body):
        self.set_font("Arial", "B", 12)
        self.multi_cell(0, 10, title)
        self.set_font("Arial", "", 12)
        self.multi_cell(0, 10, body)
        self.ln()

# Conteúdo do relatório (como se já tivesse sido realizado)
conteudo = {
    "1. Introdução": "Este relatório apresenta os resultados do projeto 'Nutrição Consciente', realizado entre 18/02/2025 e 25/05/2025. O objetivo foi promover educação alimentar por meio de um site simples e acessível para comunidades carentes.",
    
    "2. Desenvolvimento do Projeto": "Foi feito um levantamento inicial com moradores. Com base nas necessidades identificadas, criamos um site educativo com conteúdos sobre alimentação saudável. O site foi desenvolvido com HTML, CSS e JavaScript.",
    
    "3. Metodologia": "Entrevistas, coletas de dados e testes com usuários. Após o lançamento, o site passou por melhorias com base em feedback da comunidade.",
    
    "4. Resultados Obtidos": (
        "- Mais de 500 acessos ao site;\n"
        "- 80% dos entrevistados disseram ter aprendido algo novo;\n"
        "- 35 famílias relataram mudanças na alimentação;\n"
        "- Apresentação em escola local com 60 alunos."
    ),
    
    "5. Dificuldades Encontradas": (
        "- Baixo conhecimento em tecnologia por parte do público;\n"
        "- Falta de internet em alguns lares;\n"
        "- Tempo curto para testar com mais pessoas."
    ),
    
    "6. Conclusão": "O projeto cumpriu seu papel social, levando conhecimento acessível e incentivando hábitos saudáveis. Mostrou que a tecnologia pode ser usada com propósito social.",
    
    "7. Considerações Finais": "Futuramente, o projeto pode ser expandido com app offline e incluir mais comunidades. A experiência reforçou a importância da integração entre tecnologia e impacto social.",
    
    "8. Equipe Envolvida": (
        "- Gabriel da Costa (Desenvolvimento e Conteúdo)\n"
        "- Professora Responsável: Descomplica\n"
        "- Colaboradores: Voluntários da comunidade"
    ),
    
    "9. ODS Atendidos": (
        "- ODS 2 - Fome Zero\n"
        "- ODS 3 - Saúde e Bem-Estar\n"
        "- ODS 4 - Educação de Qualidade\n"
        "- ODS 10 - Redução das Desigualdades"
    )
}

# Criar o PDF
pdf = PDF()
pdf.add_page()

for titulo, texto in conteudo.items():
    pdf.chapter(limpar_caracteres(titulo), limpar_caracteres(texto))

pdf.output("Relatorio_Projeto_Realizado.pdf")
