from django.conf.urls import url

from app import views

urlpatterns= [
    url(r'^home/$', views.home, name='home'),
    url(r'^market/$', views.market, name='marketbase'),
    url(r'^market/(\d+)/(\d+)$', views.market, name='market'),
    url(r'^cart/$', views.cart, name='cart'),
    url(r'^mine/$', views.mine, name='mine'),
    url(r'^register/$', views.register, name='register'),
    url(r'^login/$', views.login, name='login'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^checkemail/$', views.checkemail, name='checkemail'),
    url(r'^addgoods/$', views.addgoods, name='addgoods'),
    url(r'^subgoods/$', views.subgoods, name='subgoods'),
    url(r'^noLogin/$', views.noLogin, name='noLogin'),
    url(r'^changeSelect/$', views.changeSelect, name='changeSelect'),
    url(r'^changeAllSelect/$', views.changAllSelect, name='changAllSelect'),
    url(r'^generateorder/$', views.generateorder, name='generateorder'),
    url(r'orderlist/$', views.orderlist, name='orderlist'),
    url(r'^orderdetail/(?P<identifier>[\d.]+)/$', views.orderdetail, name='orderdetail'),
    url(r'^returnurl/$', views.returnurl, name='returnurl'),    # 支付成功后，客户端的显示
    url(r'^appnotifyurl/$', views.appnotifyurl, name='appnotifyurl'), # 支付成功后，订单的处理
    url(r'^pay/$', views.pay, name='pay')
]