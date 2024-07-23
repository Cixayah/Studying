from django.db import models
from django.utils import timezone

# Create your models here.


# Criar filme
# CATEGORY LIST = ("database", "user")
CATEGORY_LIST = (
    ("ACTION", "Ação"),
    ("ADVENTURE", "Aventura"),
    ("ANIMATION", "Animação"),
    ("COMEDY", "Comédia"),
    ("CRIME", "Crime"),
    ("DOCUMENTARY", "Documentário"),
    ("DRAMA", "Drama"),
    ("FAMILY", "Família"),
    ("FANTASY", "Fantasia"),
    ("HORROR", "Terror"),
    ("MUSICAL", "Musical"),
    ("ROMANCE", "Romance"),
    ("SCI-FI", "Ficção Científica"),
    ("SUSP", "Suspense"),
    ("THRILLER", "Thriller"),
)


class Movie(models.Model):
    title = models.CharField(max_length=100)
    thumb = models.ImageField(upload_to="thumbnails")
    desc = models.TextField(max_length=5000)
    category = models.CharField(max_length=30, choices=CATEGORY_LIST)
    views = models.IntegerField(default=0)
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title


# Criar episódio
