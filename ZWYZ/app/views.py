import hashlib
import random
import time

from django.core.cache import cache
from django.http import JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from app.models import LoopImg, Goods, User


@csrf_exempt
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
    goods = Goods.objects.all()
    if sort != '0':
        if sort == '1':
            goods = goods.order_by('-sales')
        elif sort == '2':
            goods = goods.order_by('-price')
        elif sort == '3':
            goods = goods.order_by('price')


    return render(request, 'list.html', context={'goods': goods})


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