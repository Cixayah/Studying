from django.shortcuts import render
from .models import Movie


# Create your views here.
def homepage(request):
    return render(request, "homepage.html")


# url - view - html
def home_movies(request):
    context = {}  # {} "dicionário" Python
    movies_list = Movie.objects.all()
    context["movie_list"] = movies_list
    return render(request, "home_movies.html", context)
