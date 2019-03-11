from django.conf.urls import url

from app import views

urlpatterns=[
    url(r'^home/$', views.home, name='home'),
    url(r'^market/$', views.market, name='marketbase'),
    url(r'^market/(\d+)/(\d+)$', views.market, name='market'),
    url(r'^cart/$', views.cart, name='cart'),
    url(r'^mine/$', views.mine, name='mine'),
    url(r'^register/$', views.register, name='register'),
    url(r'^login/$', views.login, name='login'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^checkemail/$', views.checkemail, name='checkemail'),
    url(r'^addgoods/$', views.addgoods, name='addgoods')
]