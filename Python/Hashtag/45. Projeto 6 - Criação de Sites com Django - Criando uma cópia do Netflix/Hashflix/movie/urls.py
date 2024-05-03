# url - view - template
from django.urls import path, include
from .views import Homepage, Home_movies, Movie_details

urlpatterns = [
    path("", Homepage.as_view()),
    path("movies/", Home_movies.as_view()),
    path("movies/<int:pk>", Movie_details.as_view()),  # pk significa primary_key
]
