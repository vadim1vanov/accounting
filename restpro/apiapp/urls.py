from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('profile', views.profile_view, name='profile'),
]