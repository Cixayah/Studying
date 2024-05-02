# url - view - template
from django.urls import path, include
from .views import homepage, home_movies

urlpatterns = [
    path("", homepage),
    path("movies/", home_movies),
]
