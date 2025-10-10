from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

# Paleta Dracula Theme
colors_dracula = {
    "background": colors.HexColor("#282A36"),
    "foreground": colors.HexColor("#FF79C6"),
    "highlight": colors.HexColor("#50FA7B"),
}

# Treino focado em emagrecimento
treinos = {
    "Segunda (Posterior e Glúteo)": [
        "1. Stiff - 4 x 12",
        "2. Mesa Flexora - 4 x 15",
        "3. Elevação Pélvica - 4 x 12",
        "4. Glúteo na Polia - 4 x 15",
        "5. Abdução na Máquina - 3 x 15",
        "6. Cardio - 30 min",
    ],
    "Terça (Costas e Ombro)": [
        "1. Puxada Aberta - 4 x 12",
        "2. Puxada Fechada - 4 x 12",
        "3. Remada Curvada - 4 x 12",
        "4. Desenvolvimento com Halteres - 3 x 12",
        "5. Elevação Lateral - 3 x 15",
        "6. Face Pull - 3 x 12",
        "7. Cardio - 30 min",
    ],
    "Quarta (Quadríceps)": [
        "1. Agachamento Livre - 4 x 12",
        "2. Leg Press - 4 x 15",
        "3. Cadeira Extensora - 4 x 15",
        "4. Avanço com Halteres - 3 x 12",
        "5. Panturrilha Sentada - 3 x 20",
        "6. Cardio - 30 min",
    ],
    "Quinta (Peito e Abdômen)": [
        "1. Supino Inclinado com Halteres - 4 x 12",
        "2. Crucifixo - 4 x 15",
        "3. Supino Reto com Halteres - 3 x 12",
        "4. Abdominal na Máquina - 3 x 20",
        "5. Elevação de Pernas - 3 x 20",
        "6. Cardio - 30 min",
    ],
    "Sexta (Posterior e Glúteo)": [
        "1. Stiff - 4 x 12",
        "2. Mesa Flexora - 4 x 15",
        "3. Extensão de Quadril no Banco - 4 x 12",
        "4. Glúteo na Polia - 3 x 15",
        "5. Cadeira Abdutora - 3 x 15",
        "6. Cardio - 30 min",
    ],
}

# Criando o PDF
pdf_file = "treino_emagrecimento.pdf"
c = canvas.Canvas(pdf_file, pagesize=letter)
width, height = letter

# Fundo
c.setFillColor(colors_dracula["background"])
c.rect(0, 0, width, height, fill=1)

# Título
c.setFont("Helvetica-Bold", 20)
c.setFillColor(colors_dracula["highlight"])
c.drawString(180, height - 50, "Treino para Emagrecimento")
c.line(30, height - 55, width - 30, height - 55)

# Adicionando os treinos
y = height - 80
for dia, exercicios in treinos.items():
    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(colors_dracula["highlight"])
    c.drawString(30, y, dia)
    y -= 16
    c.setFont("Helvetica", 9)
    for exercicio in exercicios:
        numero, texto = exercicio.split(". ", 1)
        c.setFillColor(colors_dracula["highlight"])
        c.drawString(45, y, numero + ". ")
        if " - " in texto:
            exercicio_nome, repeticoes = texto.rsplit(" - ", 1)
            c.setFillColor(colors_dracula["foreground"])
            c.drawString(65, y, exercicio_nome + " - ")
            c.setFillColor(colors_dracula["highlight"])
            c.drawString(65 + c.stringWidth(exercicio_nome + " - "), y, repeticoes)
        else:
            c.setFillColor(colors_dracula["foreground"])
            c.drawString(65, y, texto)
        y -= 12
    y -= 10

# Salvar PDF
c.save()
print("PDF de treino para emagrecimento criado com sucesso!")
