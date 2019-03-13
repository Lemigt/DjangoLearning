import hashlib
import random
import time

from django.http import JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from django.core.cache import cache

from app.models import Wheel, Nav, Mustbuy, Shop, Main, Foodtype, Goods, User, Cart, Order, OrderGoods


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


def market(request, childNameId='0', sortid='0'):
    foodtypes = Foodtype.objects.all()
    index = int(request.COOKIES.get('index', '0'))

    categoryid = foodtypes[index].typeid

    token = request.session.get('token')
    userid = cache.get(token)
    if userid:
        user = User.objects.get(pk=userid)
        carts = Cart.objects.filter(user=user)
    else:
        carts = ''



    #  分类
    if childNameId == '0':
        good_list = Goods.objects.filter(categoryid=categoryid)
    else:
        good_list = Goods.objects.filter(categoryid=categoryid).filter(childcid=childNameId)

    childtypenames = foodtypes[index].childtypenames

    #  排序
    if sortid == '1':
        good_list = good_list.order_by('productnum')
        #  用order_by方法要接受返回对象！
    elif sortid == '2':
        print("okok")
        good_list = good_list.order_by('price')
    elif sortid == '3':
        good_list = good_list.order_by('-price')


    childtype_list = []
    for item in childtypenames.split('#'):
        item_arr = item.split(':')
        item_dir = {
            'name':item_arr[0],
            'id':item_arr[1]
        }
        childtype_list.append(item_dir)

    response_dir = {
        'foodtypes':foodtypes,
        'good_list': good_list,
        'childtypenames':childtype_list,
        'childid': childNameId,
        'carts':carts
    }

    return render(request, 'market/market.html', context=response_dir)


def cart(request):
    token = request.session.get('token')
    userid = cache.get(token)
    if userid:
        user = User.objects.get(pk=userid)
        carts = user.cart_set.filter(number__gt=0)


        return render(request, 'cart/cart.html', context={'carts': carts})

    else:
        carts = ''
        return render(request, 'cart/noLogin.html')


# def cart(request):
#     token = request.session.get('token')
#     userid = cache.get(token)
#     if userid:  # 有登录才显示
#         user = User.objects.get(pk=userid)
#         carts = user.cart_set.filter(number__gt=0)
#
#         isall = True
#         for cart in carts:
#             if not cart.isselect:
#                 isall = False
#
#         return render(request, 'cart/cart.html', context={'carts': carts, 'isall':isall})
#     else:   # 未登录不显示
#         return render(request, 'cart/noLogin.html')





def mine(request):
    # 获取
    token = request.session.get('token')
    userid = cache.get(token)
    user = None
    if userid:
        user = User.objects.get(pk=userid)

    return render(request, 'mine/mine.html', context={'user': user})


def register(request):
    if request.method == 'GET':
        email = request.GET.get('email')
        print(email)
        users = User.objects.filter(email=email)
        if users.exists():
            return JsonResponse

        return render(request, 'mine/register.html')
    elif request.method == 'POST':
        user = User()
        username = request.POST.get('name')
        password = request.POST.get('password')
        email = request.POST.get('email')
        user.name = username
        user.password = generate_password(password)
        user.email = email
        token = generate_token()
        user.save()

        cache.set(token, user.id, 60 * 60 * 24 * 3)

        request.session['token'] = token

        return redirect('axf:mine')


def login(request):
    if request.method == 'GET':
        return render(request, 'mine/login.html')
    elif request.method == 'POST':
        username = request.POST.get('email')
        password = request.POST.get('password')
        users = User.objects.filter(email=username)
        if users.exists():
            user = users.first()
            if generate_password(password) == user.password:
                tokennum = generate_token()

                cache.set(tokennum, user.id, 60*60*24*3)
                request.session['token'] = tokennum
                if request.COOKIES.get('bacck') == 'mine':
                    return redirect('axf:mine')
                else:
                    return redirect('axf:marketbase')

            else:
                print('传了参数')
                return render(request, 'mine/login.html', context={'password_err':'密码错误！'})
        else:
            return render(request, 'mine/login.html', context={'username_err': '用户不存在！'})


def generate_token():
    temp = str(time.time()) + str(random.random())
    md5 = hashlib.md5()
    md5.update(temp.encode('utf-8'))
    return md5.hexdigest()


def generate_password(param):
    md5 = hashlib.md5()
    md5.update(param.encode('utf-8'))
    return md5.hexdigest()


def logout(request):
    request.session.flush()
    return redirect('axf:mine')


def checkemail(request):
    email = request.GET.get('email')
    users = User.objects.filter(email=email)
    if users.exists():
        response_data = {
            'status': 1,
            'msg': '该邮箱已被注册'
        }
    else:
        response_data = {
            'status':0,
            'msg':'该邮箱可以注册'
        }

    return JsonResponse(response_data)


def addgoods(request):
    response_data = {}
    token = request.session.get('token')

    if token:
        userid = cache.get(token)
        print(userid)
        if userid:
            user = User.objects.get(pk=userid)
            productid = request.GET.get('goodsid')
            if productid:
                print('not none')
            else:
                print('none')

            print('##################################')
            print(type(productid))

            goods = Goods.objects.get(pk=productid)


            carts = Cart.objects.filter(user=user).filter(goods=goods)
            if carts.exists():
                cart = carts.first()
                cart.number = cart.number + 1
                cart.save()
            else:
                cart = Cart()
                cart.user = user
                cart.goods = goods
                cart.number = 1
                cart.save()

            response_data['status'] = 1
            response_data['msg'] = '添加 {} 购物车成功: {}'.format(cart.goods.productlongname, cart.number)
            response_data['number'] = cart.number

            return JsonResponse(response_data)

    response_data['status'] = -1
    response_data['msg'] = '请登录后操作'

    return JsonResponse(response_data)


def noLogin(request):
    return render(request, 'cart/noLogin.html')


def subgoods(request):

    goodsid = request.GET.get('goodsid')
    print(goodsid)
    goods = Goods.objects.get(pk=goodsid)

    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)

    cart = Cart.objects.filter(user=user).filter(goods=goods).first()
    cart.number = cart.number -1
    cart.save()

    response_data = {
        'msg': '删减商品成功',
        'status': 1,
        'number': cart.number
    }

    return JsonResponse(response_data)


def changeSelect(request):

    cartid = request.GET.get('cartid')
    cart = Cart.objects.get(pk=cartid)
    if cart.isselect == 1:
        cart.isselect = 0
        print('change to 0')
    else:
        cart.isselect = 1
        print('change to 1')
    cart.save()
    isSelect = cart.isselect

    print(cartid)
    response_data = {
        'status': 1,
        'msg': '选择状态改变',
        'isSelect':isSelect
    }


    return JsonResponse(response_data)


def changAllSelect(request):

    isall = eval(request.GET.get('isall'))
    print(type(isall))
    print(isall)
    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)

    reIsAll = 1

    carts = user.cart_set.all()
    if isall:
        for cart in carts:
            cart.isselect = 1
            cart.save()
        reIsAll = 1
    else:
        for cart in carts:
            cart.isselect = 0
            cart.save()
        reIsAll = 0

    print(reIsAll)
    response_data = {
        'msg': '完成全选/反选操作',
        'reIsAll':reIsAll,
        'status':1
    }
    return JsonResponse(response_data)


def generate_identifier():
    temp = str(time.time()) + str(random.randrange(1000,10000))
    return temp


def generateorder(request):
    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)

    order = Order()
    order.user = user
    order.identifier = generate_identifier()
    order.save()

    carts = user.cart_set.filter(isselect=True)
    for cart in carts:
        orderGoods = OrderGoods()
        orderGoods.order = order
        orderGoods.goods = cart.goods
        orderGoods.number = cart.number
        orderGoods.save()

        cart.delete()

    return render(request, 'order/orderdetail.html', context={'order': order})


def orderlist(request):
    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)

    orders = user.order_set.all()

    return render(request, 'order/orderlist.html', context={'orders':orders})


def orderdetail(request, identifier):
    order = Order.objects.filter(identifier=identifier).first()

    return render(request, 'order/orderdetail.html', context={'order': order})