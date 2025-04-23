from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

# Definindo a paleta de cores do Dracula Theme
colors_dracula = {
    "background": colors.HexColor("#282A36"),
    "foreground": colors.HexColor("#FF79C6"),
    "highlight": colors.HexColor("#50FA7B"),
}

# Dados do novo treino
treinos = {
    "Segunda (Peito, Tríceps e Ombro Frontal/Lateral)": [
        "1. Supino Reto com Halteres - 4 x 8-10",
        "2. Supino Inclinado com Halteres - 3 x 10-12",
        "3. Crossover no Cabo - 3 x 12-15",
        "4. Desenvolvimento com Halteres - 4 x 10",
        "5. Elevação Lateral com Halteres - 3 x 12-15",
        "6. Tríceps Testa com Barra EZ - 3 x 12",
        "7. Tríceps na Polia com Corda - 3 x 15",
        "8. Cardio - 20 min+",
    ],
    "Terça (Costas, Bíceps e Ombro Posterior)": [
        "1. Puxada na Frente - 4 x 8-10",
        "2. Remada na Máquina ou Barra T - 4 x 10",
        "3. Remada Unilateral com Halter - 3 x 12",
        "4. Face Pull no Cabo - 3 x 15",
        "5. Crucifixo Inverso no Peck Deck - 3 x 15",
        "6. Rosca Direta com Barra EZ - 3 x 10",
        "7. Rosca Martelo - 3 x 12",
        "8. Cardio - 20 min+",
    ],
    "Quarta (Perna + Abdômen)": [
        "1. Agachamento Livre - 4 x 8-10",
        "2. Leg Press 45º - 4 x 10-12",
        "3. Cadeira Extensora - 3 x 15",
        "4. Mesa Flexora - 3 x 12",
        "5. Stiff com Halteres - 3 x 10",
        "6. Panturrilha Sentada - 4 x 20",
        "7. Elevação de Pernas - 3 x 20",
        "8. Abdominal Solo ou Máquina - 3 x 20",
    ],
    "Quinta (Peito, Tríceps e Ombro Frontal/Lateral)": [
        "1. Supino Reto com Halteres - 4 x 8-10",
        "2. Supino Inclinado com Halteres - 3 x 10-12",
        "3. Crossover no Cabo - 3 x 12-15",
        "4. Desenvolvimento com Halteres - 4 x 10",
        "5. Elevação Lateral com Halteres - 3 x 12-15",
        "6. Tríceps Testa com Barra EZ - 3 x 12",
        "7. Tríceps na Polia com Corda - 3 x 15",
        "8. Cardio - 20 min+",
    ],
    "Sexta (Costas, Bíceps e Ombro Posterior)": [
        "1. Puxada na Frente - 4 x 8-10",
        "2. Remada na Máquina ou Barra T - 4 x 10",
        "3. Remada Unilateral com Halter - 3 x 12",
        "4. Face Pull no Cabo - 3 x 15",
        "5. Crucifixo Inverso no Peck Deck - 3 x 15",
        "6. Rosca Direta com Barra EZ - 3 x 10",
        "7. Rosca Martelo - 3 x 12",
        "8. Cardio - 20 min+",
    ],
    "Sábado (Perna + Abdômen)": [
        "1. Agachamento Livre - 4 x 8-10",
        "2. Leg Press 45º - 4 x 10-12",
        "3. Cadeira Extensora - 3 x 15",
        "4. Mesa Flexora - 3 x 12",
        "5. Stiff com Halteres - 3 x 10",
        "6. Panturrilha Sentada - 4 x 20",
        "7. Elevação de Pernas - 3 x 20",
        "8. Abdominal Solo ou Máquina - 3 x 20",
    ],
}

# Criando o PDF
pdf_file = "treino_semana_cix_atualizado.pdf"
c = canvas.Canvas(pdf_file, pagesize=letter)
width, height = letter

# Fundo personalizado
c.setFillColor(colors_dracula["background"])
c.rect(0, 0, width, height, fill=1)

# Título
c.setFont("Helvetica-Bold", 24)
c.setFillColor(colors_dracula["highlight"])
c.drawString(170, height - 50, "Plano de Treino do Cix")
c.line(30, height - 55, width - 30, height - 55)

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
    y -= 10

# Salvando o PDF
c.save()

print("PDF de treino atualizado criado com sucesso!")
