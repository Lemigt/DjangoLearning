from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^baseGrammar/$', views.baseGrammar),
]