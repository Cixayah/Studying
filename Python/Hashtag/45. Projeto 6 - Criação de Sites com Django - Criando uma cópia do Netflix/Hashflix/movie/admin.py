from django.contrib import admin
from .models import Movie  # ponto significa que o arquivo está na mesma pasta

# Register your models here.
admin.site.register(Movie)
