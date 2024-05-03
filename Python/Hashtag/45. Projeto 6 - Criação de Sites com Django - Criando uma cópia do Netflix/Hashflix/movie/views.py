from django.shortcuts import render
from .models import Movie
from django.views.generic import TemplateView, ListView

# Create your views here.


class Homepage(TemplateView):
    template_name = "homepage.html"


class Home_movies(ListView):
    template_name = "home_movies.html"
    model = Movie
    # object_list


# url - view - html

# def homepage(request):
#     return render(request, "homepage.html")

# def home_movies(request):
#     context = {}  # {} "dicionário" Python
#     movies_list = Movie.objects.all()
#     context["movie_list"] = movies_list
#     return render(request, "home_movies.html", context)
