from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

# Definindo a paleta de cores do Dracula Theme
colors_dracula = {
    "background": colors.HexColor("#282A36"),
    "foreground": colors.HexColor("#FF79C6"),
    "highlight": colors.HexColor("#50FA7B"),
}

# Dados do novo treino organizados por grupos musculares sem letras
treinos = {
    "Segunda (Peito, Ombro Frontal/Lateral, Tríceps)": [
        "1. Supino Reto com Halteres + Flexão - 3 x 10 (Bi-set)",
        "2. Supino Inclinado com Halteres - 3 x 10-12 (Drop set)",
        "3. Crossover no Cabo - 3 x 15",
        "4. Desenvolvimento com Halteres + Elevação Lateral - 3 x 10 (Bi-set)",
        "5. Elevação Lateral com Halteres - 3 x 15 (Drop set)",
        "6. Tríceps Testa com Barra EZ - 3 x 12",
        "7. Tríceps na Polia com Corda - 2 x 15 (Rest-pause)",
        "8. Cardio - 20 min+",
    ],
    "Terça (Costas, Ombro Posterior, Bíceps)": [
        "1. Puxada na Frente - 3 x 10 (Drop set)",
        "2. Remada na Máquina ou Barra T - 4 x 10",
        "3. Remada Unilateral com Halter + Face Pull - 3 x 12 (Bi-set)",
        "4. Crucifixo Inverso no Peck Deck - 3 x 15",
        "5. Rosca Direta com Barra EZ - 2 x 12 (Rest-pause)",
        "6. Rosca Martelo - 3 x 12 (Drop set)",
        "7. Cardio - 20 min+",
    ],
    "Quarta (Perna + Abdômen)": [
        "1. Agachamento Livre - 3 x 8 (Rest-pause)",
        "2. Leg Press 45º + Cadeira Extensora - 3 x 12 (Bi-set)",
        "3. Mesa Flexora - 3 x 12",
        "4. Stiff com Halteres - 3 x 10 (Drop set)",
        "5. Panturrilha Sentada - 4 x 20",
        "6. Elevação de Pernas - 3 x 20",
        "7. Abdominal Solo ou Máquina - 3 x 20",
    ],
    "Quinta (Peito, Ombro Frontal/Lateral, Tríceps)": [
        "1. Supino Reto com Halteres + Crucifixo - 3 x 10 (Bi-set)",
        "2. Supino Inclinado com Halteres - 3 x 10-12",
        "3. Crossover no Cabo - 3 x 15 (Drop set)",
        "4. Desenvolvimento com Halteres - 4 x 10",
        "5. Elevação Lateral com Halteres + Desenvolvimento Lateral - 3 x 12 (Bi-set)",
        "6. Tríceps Testa com Barra EZ - 2 x 12 (Rest-pause)",
        "7. Tríceps na Polia com Corda - 3 x 15",
        "8. Cardio - 20 min+",
    ],
    "Sexta (Costas, Ombro Posterior, Bíceps)": [
        "1. Puxada na Frente - 4 x 8-10",
        "2. Remada na Máquina + Remada Curvada - 3 x 10 (Bi-set)",
        "3. Remada Unilateral com Halter - 3 x 12 (Drop set)",
        "4. Face Pull no Cabo - 3 x 15",
        "5. Crucifixo Inverso no Peck Deck - 3 x 15",
        "6. Rosca Direta com Barra EZ - 2 x 12 (Rest-pause)",
        "7. Rosca Martelo - 3 x 12",
        "8. Cardio - 20 min+",
    ],
    "Sábado (Perna + Abdômen)": [
        "1. Agachamento Livre - 3 x 10 (Drop set)",
        "2. Leg Press 45º - 4 x 10-12",
        "3. Cadeira Extensora + Flexora - 3 x 12 (Bi-set)",
        "4. Stiff com Halteres - 2 x 10 (Rest-pause)",
        "5. Panturrilha Sentada - 4 x 20",
        "6. Elevação de Pernas - 3 x 20",
        "7. Abdominal Solo ou Máquina - 3 x 20",
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
c.setFont("Helvetica-Bold", 16)
c.setFillColor(colors_dracula["highlight"])
c.drawString(170, height - 40, "Plano de Treino do Cix")
c.line(30, height - 45, width - 30, height - 45)

# Adicionando os treinos
y = height - 70
for dia, exercicios in treinos.items():
    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(colors_dracula["highlight"])
    c.drawString(30, y, dia)
    y -= 18
    c.setFont("Helvetica", 9)
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
        y -= 12
    y -= 8

# Salvando o PDF
c.save()

print("PDF de treino atualizado criado com sucesso!")
