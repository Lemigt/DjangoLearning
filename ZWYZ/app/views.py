from django.shortcuts import render

# Create your views here.
from app.models import LoopImg


def index(request):

    # for i in range(1,6):
    #     loopimg = LoopImg()
    #     temp = 'images/index/lunbo'+str(i)+'.jpg'
    #     loopimg.imgurl = temp
    #     loopimg.save()
    loopimgs = LoopImg.objects.all()


    return render(request, 'index.html',context={'loopimgs':loopimgs})


def list(request):
    return render(request, 'list.html')


def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')


def register(request):
    if request.method == 'GET':
        return render(request, 'rejister.html')


def xiangqing(request):
    return render(request, 'test.html')