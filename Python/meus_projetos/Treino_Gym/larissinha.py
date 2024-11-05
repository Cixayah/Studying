from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

# Definindo a paleta de cores do Dracula Theme
colors_dracula = {
    "background": colors.HexColor("#282A36"),
    "foreground": colors.HexColor("#FF79C6"),
    "highlight": colors.HexColor("#50FA7B"),
}

# Dados do treino da Larissinha (ajustado para incluir puxada aberta e fechada e evitar repetições)
treinos = {
    "Segunda (Posterior e Glúteo)": [
        "1. Stiff - 4 x 10-12",
        "2. Mesa Flexora - 4 x 10-15",
        "3. Elevação Pélvica - 4 x 10-12",
        "4. Glúteo na Polia (ou Glúteo no Cabo) - 4 x 12",
        "5. Abdução na Máquina - 3 x 12-15",
        "6. Cardio - 20 min+",
    ],
    "Terça (Costas e Ombro)": [
        "1. Puxada Aberta - 4 x 10-12",
        "2. Puxada Fechada - 4 x 10-12",
        "3. Remada Curvada (ou Remada Unilateral) - 4 x 10-12",
        "4. Desenvolvimento com Halteres - 3 x 10-12 (frontal e medial dos ombros)", 
        "5. Elevação Lateral - 3 x 10-15 (medial dos ombros)",
        "6. Face Pull - 3 x 10-12 (posterior dos ombros)",
        "7. Cardio - 20 min+",
    ],
    "Quarta (Quadríceps)": [
        "1. Agachamento Livre (ou Agachamento no Smith) - 4 x 10-12",
        "2. Leg Press - 4 x 10-15",
        "3. Cadeira Extensora - 4 x 10-15",
        "4. Avanço com Halteres (ou Passada no Smith) - 3 x 10-12",
        "5. Panturrilha Sentada (ou Panturrilha em Pé) - 3 x 12-15",
    ],
    "Quinta (Peito)": [
        "1. Supino Inclinado com Halteres (ou Supino Inclinado Máquina/Barra) - 4 x 10-12",
        "2. Crucifíxo (ou Fly com Halteres) - 4 x 10-15",
        "3. Supino Reto com Halteres (ou Supino Reto Máquina/Barra)  - 3 x 10-12",
        "4. Cardio - 20 min+",
    ],
    "Sexta (Posterior e Glúteo)": [
        "1. Stiff (ou Levantamento Terra Romeno) - 4 x 10-12",
        "2. Mesa Flexora - 4 x 10-15",
        "3. Extensão de Quadril no Banco - 4 x 10-12",
        "4. Glúteo na Polia - 3 x 12-15",
        "5. Cadeira Abdutora - 3 x 12-15",
        "6. Cardio - 20 min+",
        
    ],
}

# Criando o PDF
pdf_file = "treino_larissinha.pdf"
c = canvas.Canvas(pdf_file, pagesize=letter)
width, height = letter

# Fundo personalizado
c.setFillColor(colors_dracula["background"])
c.rect(0, 0, width, height, fill=1)

# Título
c.setFont("Helvetica-Bold", 24)
c.setFillColor(colors_dracula["highlight"])
c.drawString(200, height - 50, "Plano de Treino da Larissinha")
c.line(30, height - 55, width - 30, height - 55)  # Linha abaixo do título

# Adicionando os treinos
y = height - 100
for dia, exercicios in treinos.items():
    c.setFont("Helvetica-Bold", 16)
    c.setFillColor(colors_dracula["highlight"])
    c.drawString(30, y, dia)
    y -= 20
    c.setFont("Helvetica", 12)
    for exercicio in exercicios:
        numero, texto = exercicio.split(". ", 1)
        c.setFillColor(colors_dracula["highlight"])
        c.drawString(50, y, numero + ". ")

        if " - " in texto:
            exercicio_nome, repeticoes = texto.rsplit(" - ", 1)
            c.setFillColor(colors_dracula["foreground"])
            c.drawString(70, y, exercicio_nome + " - ")
            c.setFillColor(colors_dracula["highlight"])
            c.drawString(70 + c.stringWidth(exercicio_nome + " - "), y, repeticoes)
        else:
            c.setFillColor(colors_dracula["foreground"])
            c.drawString(70, y, texto)

        y -= 15
    y -= 10  # Espaço entre os dias

# Salvando o PDF
c.save()

print("PDF de treino da Larissinha criado com sucesso!")
