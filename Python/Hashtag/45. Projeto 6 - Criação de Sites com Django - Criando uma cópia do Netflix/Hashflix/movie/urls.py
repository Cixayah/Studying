# url - view - template
from django.urls import path, include
from .views import Homepage, Home_movies

urlpatterns = [
    path("", Homepage.as_view()),
    path("movies/", Home_movies.as_view()),
]
