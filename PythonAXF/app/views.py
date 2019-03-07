from django.shortcuts import render

# Create your views here.
from app.models import Wheel, Nav, Mustbuy, Shop, Main, Foodtype, Goods


def home(request):
    wheels = Wheel.objects.all()
    nav = Nav.objects.all()
    mustbuy = Mustbuy.objects.all()
    shop = Shop.objects.all()
    mainshows = Main.objects.all()


    response_dir = {
        'wheels':wheels,
        'nav':nav,
        'mustbuy':mustbuy,
        'shopheads': shop[0:1],
        'shoptabs':shop[1:3],
        'shopclasses': shop[3:7],
        'shopcommends' : shop[7:11],
        'mianshows':mainshows

    }

    return render(request, 'home/home.html', context=response_dir)


def market(request):
    foodtypes = Foodtype.objects.all()
    testgoods = Goods.objects.all()[1:11]
    response_dir = {
        'foodtypes':foodtypes,
        'testgoods':testgoods,
    }

    return render(request, 'market/market.html', context=response_dir)


def cart(request):
    return render(request, 'cart/cart.html')


def mine(request):
    return render(request, 'mine/mine.html')