from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

# Definindo a paleta de cores do Dracula Theme
colors_dracula = {
    "background": colors.HexColor("#282A36"),
    "foreground": colors.HexColor("#FF79C6"),
    "highlight": colors.HexColor("#50FA7B"),
}

# Dados do treino
treinos = {
    "Segunda (Peito e Tríceps)": [
        "1. Supino Inclinado com Halteres (ou Supino Inclinado Barra) - 3 x 10-12",
        "2. Crucifíxo (ou Fly com Halteres) - 3 x 10-15",
        "3. Supino Reto com Halteres (ou Supino Reto Barra) - 3 x 10-12",
        "4. Tríceps na Polia - 3 x 10-12",
        "5. Tríceps Francês - 3 x 10-12",
        "6. Tríceps com Halteres - 3 x 10-12",
        "7. Cardio - 20 min+",
    ],
    "Terça (Costas e Bíceps)": [
        "1. Remada Unilateral - 3 x 10-12",
        "2. Puxada Aberta - 3 x 10-12",
        "3. Puxada Fechada - 3 x 10-12",
        "4. Remada Baixa Fechada - 3 x 10-12",
        "5. Rosca Scott - 4 x 10-12",
        "6. Rosca Martelo - 4 x 10-12",
        "7. Cardio - 20 min+",
    ],
    "Quarta (Leg Day)": [
        "1. Agachamento - 4 x 10-12",
        "2. Leg Press (ou Cadeira Leg Press) - 4 x 10-15",
        "3. Cadeira Extensora - 3 x 10-15",
        "4. Agachamento Hack - 4 x 10-15",
        "5. Cadeira Flexora - 3 x 10-15",
        "6. Mesa Flexora - 4 x 10-15",
        "7. Cadeira Abdutora - 3 x 10-15",
        "8. Panturrilha - 3 x 12-15",
    ],
    "Quinta (Ombro)": [
        "1. Desenvolvimento com Halteres - 3 x 10-12",
        "2. Elevação Frontal - 4 x 10-12",
        "3. Elevação Lateral - 4 x 10-15",
        "4. Puxada Corda - 3 x 10-15",
        "5. Encolhimento para Trapézio - 3 x 10-12",
        "6. Cardio - 20 min+",
    ],
    "Sexta (Full Body)": [
        "1. Levantamento Terra - 4 x 8-10",
        "2. Agachamento - 3 x 10-12",
        "3. Dumbell Press (ou Supino Reto) - 3 x 10-12",
        "4. Remada com Halteres - 3 x 10-12",
        "5. Cardio - 20 min+",
    ],
    "Sábado (Abdominal + Cardio)": [
        "1. Abdominal (abdominal reto) - 4 x até morrer",
        "2. Cardio - 45-60 min",
    ],
}

# Criando o PDF
pdf_file = "treino_semana_cix.pdf"
c = canvas.Canvas(pdf_file, pagesize=letter)
width, height = letter

# Fundo personalizado
c.setFillColor(colors_dracula["background"])
c.rect(0, 0, width, height, fill=1)

# Título
c.setFont("Helvetica-Bold", 24)
c.setFillColor(colors_dracula["highlight"])
c.drawString(200, height - 50, "Plano de Treino do Cix")
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
        # Extraindo o número e o restante do texto
        numero, texto = exercicio.split(". ", 1)
        # Desenhando o número em verde
        c.setFillColor(colors_dracula["highlight"])
        c.drawString(50, y, numero + ". ")

        # Separando o texto das repetições
        if " - " in texto:
            exercicio_nome, repeticoes = texto.rsplit(" - ", 1)
            # Desenhando o texto em branco
            c.setFillColor(colors_dracula["foreground"])
            c.drawString(70, y, exercicio_nome + " - ")
            # Desenhando as repetições em verde
            c.setFillColor(colors_dracula["highlight"])
            c.drawString(70 + c.stringWidth(exercicio_nome + " - "), y, repeticoes)
        else:
            c.setFillColor(colors_dracula["foreground"])
            c.drawString(70, y, texto)

        y -= 15
    y -= 10  # Espaço entre os dias

# Salvando o PDF
c.save()

print("PDF de treino criado com sucesso!")
