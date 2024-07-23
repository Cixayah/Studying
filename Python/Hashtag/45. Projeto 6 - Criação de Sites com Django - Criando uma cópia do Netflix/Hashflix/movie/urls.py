# url - view - template
from django.urls import path, include
from .views import Homepage, Home_movies, Movie_details

app_name = "movie"

urlpatterns = [
    path("", Homepage.as_view(), name="homepage"),
    path("movies/", Home_movies.as_view(), name="movies"),
    path(  # pk significa primary_key
        "movies/<int:pk>", Movie_details.as_view(), name="movie_details"
    ),
]
