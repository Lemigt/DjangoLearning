from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^list/$', views.list, name='listbase'),
    url(r'^list/(\d+)/$', views.list, name='list'),
    url(r'^login/$', views.login, name='login'),
    url(r'^register/$', views.register, name='register'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^xiangqing/(\d+)/$', views.xiangqing, name='xiangqing'),
    # url(r'^classify/$', views.classify, name='classify')
]