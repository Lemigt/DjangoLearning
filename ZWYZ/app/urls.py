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
    url(r'^cart/$', views.cart, name='cart'),
    url(r'^addcart/$', views.addcart, name='addcart'),
    url(r'^subcart/$', views.subcart, name='subcart'),
    url(r'^changeselect/$',views.changeselect, name='changeselect'),
    url(r'^removecart/$', views.removecart, name='removecart'),
    url(r'^generateorder/$', views.generateorder, name='generateorder'),
    url(r'^orderlist/$', views.orderlist, name='orderlist'),
    url(r'^orderdetail/(\d+)/$', views.orderdetail, name='orderdetail'),
    url(r'^returnurl/$', views.returnurl, name='returnurl'),    # 支付成功后，客户端的显示
    url(r'^appnotifyurl/$', views.appnotifyurl, name='appnotifyurl'), # 支付成功后，订单的处理
    url(r'^pay/$', views.pay, name='pay'),

]