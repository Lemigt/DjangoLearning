import hashlib
import random
import time
from urllib.parse import parse_qs

from django.core.cache import cache
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from app.models import LoopImg, Goods, User, Cart, Order, OrderGoods
from app.alipay import alipay

def index(request):

    # for i in range(1,6):
    #     loopimg = LoopImg()
    #     temp = 'images/index/lunbo'+str(i)+'.jpg'
    #     loopimg.imgurl = temp
    #     loopimg.save()
    loopimgs = LoopImg.objects.all()
    token = request.session.get('token')
    userid = cache.get(token)
    user = None
    if userid:
        user = User.objects.get(pk=userid)


    return render(request, 'index.html',context={'loopimgs':loopimgs, 'user':user})


def list(request, sort='0'):
    token = request.session.get('token')
    userid = cache.get(token)
    user = None
    if userid:
        user = User.objects.get(pk=userid)

    goods = Goods.objects.all()
    if sort != '0':
        if sort == '1':
            goods = goods.order_by('-sales')
        elif sort == '2':
            goods = goods.order_by('-price')
        elif sort == '3':
            goods = goods.order_by('price')

    return render(request, 'list.html', context={'goods': goods, 'user':user})


def generate_token():
    temp = str(time.time()) + str(random.random())
    md5 = hashlib.md5()
    md5.update(temp.encode('utf-8'))
    return md5.hexdigest()


def generate_password(param):
    md5 = hashlib.md5()
    md5.update(param.encode('utf-8'))
    return md5.hexdigest()


def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':
        username = request.POST.get('username')

        users = User.objects.filter(telnumber=username)
        if users:
            user = users.first()
            password = request.POST.get('password')
            if generate_password(password) == user.password:
                token = generate_token()
                cache.set(token, user.id, 60 * 60 * 24 * 3)
                request.session['token'] = token
                if request.COOKIES.get('back') == 'list':
                    return  redirect('zwyz:listbase')
                else:
                    return render(request, 'index.html', context={'user': user})
            else:
                return render(request, 'login.html', context={'p_err':'密码错误！'})
        else:
            return render(request, 'login.html', context={'u_err':'用户名不存在！'})




def register(request):
    if request.method == 'GET':
        return render(request, 'rejister.html')
    elif request.method == 'POST':
        user = User()
        username = request.POST.get('mobile')
        telnumber = User.objects.filter(telnumber=username)
        if telnumber:
            return render(request, 'rejister.html', context={"err":'该手机号码已被注册'})
        else:
            password = generate_password(request.POST.get('password'))
            user.telnumber = username
            user.password = password
            user.save()
            token = generate_token()
            cache.set(token, user.id, 60 * 60 * 24 * 3)

            request.session['token'] = token
            return redirect('zwyz:index')





def logout(request):
    request.session.flush()
    return redirect('zwyz:index')


def xiangqing(request, goodsid='0'):

    goods = Goods.objects.get(pk=int(goodsid))


    return render(request, 'xiangqing.html', context={'goods':goods})


# def classify(request):
#     typeid = request.GET.get('typeid')
#     brandid = request.GET.get('brandid')
#
#     goods = Goods.objects.filter(typeid=typeid).filter(brandid=brandid)
#     response_data = {
#         'goods':goods
#     }
#
#     print(typeid, brandid)
#     return JsonResponse(response_data)
def cart(request):
    token = request.session.get('token')
    userid = cache.get(token)
    if userid:
        user = User.objects.get(pk=userid)
        carts = user.cart_set.filter(number__gt=0)

        return render(request, 'goodcar.html', context={'carts':carts})

    else:
        return render(request, 'login.html')


def addcart(request):
    goodsid = request.GET.get('goodsid')
    goods = Goods.objects.get(pk=goodsid)
    print(goodsid)
    token = request.session.get('token')
    userid = cache.get(token)
    response_data = {}
    if userid:
        user = User.objects.get(pk=userid)
        carts = user.cart_set.filter(goods=goods).filter(user=user)
        response_data['status'] = 1
        if carts:
            cart = carts.first()
            print('cart exist')
            cart.number = cart.number +1
            cart.save()
            response_data['goodsnumber'] = cart.number
            return JsonResponse(response_data)
        else:
            print('cart is not exist')
            cart = Cart()
            cart.user = user
            cart.goods = goods
            cart.number = 1
            cart.save()

        return JsonResponse(response_data)
    else:
        response_data['status'] = 0
        return JsonResponse(response_data)


def subcart(request):
    response_data = {}
    goodsid = request.GET.get('goodsid')
    goods = Goods.objects.get(pk=goodsid)
    print(goodsid)
    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)
    carts = user.cart_set.filter(goods=goods).filter(user=user)
    cart = carts.first()

    if cart.number > 0:
        cart.number = cart.number - 1
        cart.save()
    response_data['goodsnumber'] = cart.number
    return JsonResponse(response_data)


def removecart(request):

    response_data = {
        'status':1
    }
    goodsid = request.GET.get('delgoodsid')
    print(goodsid)
    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)
    goods = Goods.objects.get(pk=goodsid)
    carts = user.cart_set.filter(goods=goods).filter(user=user)
    cart = carts.first()
    cart.number = 0
    cart.save()

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
    if carts:
        allpay = 0
        for cart in carts:
            price = cart.goods.price
            num = cart.number
            totalprice = price*num
            allpay += totalprice
            orderGoods = OrderGoods()
            orderGoods.order = order
            orderGoods.goods = cart.goods
            orderGoods.number = cart.number
            orderGoods.save()

            cart.delete()

        return render(request, 'orderdetail.html', context={'order':order, 'allpay':allpay})
    else:
        print('not_select_goods')
        return HttpResponse('您没有选择商品')

    # return render(request, 'orderdetail.html')



def changeselect(request):
    response_data={}
    isselect = request.GET.get('isselect')

    goodsid = request.GET.get('goodsid')
    goods = Goods.objects.get(pk=int(goodsid))

    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)

    carts = user.cart_set.filter(goods=goods).filter(user=user)
    cart = carts.first()
    print(cart.isselect)
    if isselect == '1':
        cart.isselect = 1
        cart.save()
        print('change to 1')
    elif isselect == '0':
        cart.isselect = 0
        cart.save()
        print('chang to 0')
    return JsonResponse(response_data)


def orderlist(request):
    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)

    orders = user.order_set.all()

    return render(request, 'orderlist.html', context={'orders':orders})


def orderdetail(request, orderid=0):
    order = Order.objects.get(pk=int(orderid))

    allpay = 0
    for ordergoods in order.ordergoods_set.all():
        totalprice = ordergoods.number * ordergoods.goods.price
        allpay += totalprice

    return render(request, 'orderdetail.html', context={'order':order, 'allpay':allpay})


def returnurl(request):
    return redirect('zwyz:index')



@csrf_exempt
def appnotifyurl(request):
    # if request.method == 'POST':
    #     # 获取到参数
    #     body_str = request.body.decode('utf-8')
    #
    #     # 通过parse_qs函数
    #     post_data = parse_qs(body_str)
    #
    #     # 转换为字典
    #     post_dic = {}
    #     for k,v in post_data.items():
    #         post_dic[k] = v[0]
    #
    #     # 获取订单号
    #     out_trade_no = post_dic['out_trade_no']
    #
    #     # 更新状态
    #     Order.objects.filter(identifier=out_trade_no).update(status=1)
    #
    #
    return JsonResponse({'msg':'success'})



def pay(request):
    # print(request.GET.get('orderid'))

    orderid = request.GET.get('orderid')
    order = Order.objects.get(pk=orderid)

    goodsnames = ''
    sum = 0
    for orderGoods in order.ordergoods_set.all():
        sum += orderGoods.goods.price * orderGoods.number
        onegoodsname = orderGoods.goods.longname + 'X' + str(orderGoods.number)
        goodsnames += onegoodsname
        goodsnames += '|'

    print(goodsnames)
    data = alipay.direct_pay(

        subject=goodsnames, # 商品详情
        out_trade_no=order.identifier,
        total_amount=str(sum),
        return_url='http://39.98.84.248/axf/returnurl/'
    )


    alipay_url = 'https://openapi.alipaydev.com/gateway.do?{data}'.format(data=data)

    response_data = {
        'msg': '发起支付',
        'alipayurl': alipay_url,
        'status': 1
    }

    return JsonResponse(response_data)
    # return JsonResponse(data)