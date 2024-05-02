# url - view - template
from django.urls import path, include
from .views import Homepage, home_movies

urlpatterns = [
    path("", Homepage.as_view()),
    path("movies/", home_movies),
]
