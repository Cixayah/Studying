from django.db import models
from django.utils import timezone
# Create your models here.


# Criar filme
# CATEGORY LIST = ("database", "user")
CATEGORY_LIST = (
    ("ANALISES", "Análises"),
    ("PROGRAMACAO", "Programação"),
    ("APRESENTACAO","Apresentação"),
    ("OUTROS", "Outros"),
)
class Movie(models.Model):
    title = models.CharField(max_length=100)
    thumb = models.ImageField(upload_to='thumbnails')
    desc = models.TextField(max_length=5000)
    category = models.CharField(max_length=30, choices=CATEGORY_LIST)
    views = models.IntegerField(default=0)
    date_created = models.DateTimeField(default=timezone.now)

# Criar episódio
