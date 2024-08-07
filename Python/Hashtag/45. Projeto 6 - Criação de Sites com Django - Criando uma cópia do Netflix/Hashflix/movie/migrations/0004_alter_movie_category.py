# Generated by Django 5.0.4 on 2024-04-29 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0003_alter_movie_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='category',
            field=models.CharField(choices=[('ACTION', 'Ação'), ('ADVENTURE', 'Aventura'), ('ANIMATION', 'Animação'), ('COMEDY', 'Comédia'), ('CRIME', 'Crime'), ('DOCUMENTARY', 'Documentário'), ('DRAMA', 'Drama'), ('FAMILY', 'Família'), ('FANTASY', 'Fantasia'), ('HORROR', 'Terror'), ('MUSICAL', 'Musical'), ('ROMANCE', 'Romance'), ('SCI-FI', 'Ficção Científica'), ('SUSP', 'Suspense'), ('THRILLER', 'Thriller')], max_length=30),
        ),
    ]
