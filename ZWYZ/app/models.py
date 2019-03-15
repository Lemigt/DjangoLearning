from django.db import models

# Create your models here.

class LoopImg(models.Model):
    imgurl = models.CharField(max_length=100)



class Goods(models.Model):
    longname = models.CharField(max_length=100)
    brandname = models.CharField(max_length=100)
    typename = models.CharField(max_length=100)
    brandid = models.IntegerField()
    typeid = models.IntegerField()
    # 商品价格
    price = models.FloatField()
    # 商品超市价格
    marketprice = models.FloatField()


