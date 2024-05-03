from django.shortcuts import render
from .models import Movie
from django.views.generic import TemplateView, ListView, DetailView


# Create your views here.


class Homepage(TemplateView):
    template_name = "homepage.html"


class Home_movies(ListView):
    template_name = "home_movies.html"
    model = Movie
    # object_list -> lista de itens do modelo


class Movie_details(DetailView):
    template_name = "movie_details.html"
    model = Movie
    # object -> 1 item do modelo


# url - view - html


# def homepage(request):
#     return render(request, "homepage.html")


# def home_movies(request):
#     context = {}  # {} "dicionário" Python
#     movies_list = Movie.objects.all()
#     context["movie_list"] = movies_list
#     return render(request, "home_movies.html", context)
